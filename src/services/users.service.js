import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { createErrorResponse } from "../utils/errorHandler";

const usersCollectionRef = collection(db, "users");

class UserService {
  isUserExists = async (username) => {
    try {
      const q = query(usersCollectionRef, where("Username", "==", username));
      console.log("q: ", q);
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot: ", querySnapshot);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking if user exists: ", error);
      return false;
    }
  };

  addUser = async (newUser) => {
    try {
      console.log("newUser: ", newUser);
      const userExists = await this.isUserExists(newUser.Username);
      console.log("userExists: ", userExists);
      if (userExists) {
        return createErrorResponse("User already exists");
      }
      const id = uuidv4();
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      const userWithRole = {
        ...newUser,
        password: hashedPassword,
        role: "customer",
      };
      return await setDoc(doc(db, "users", id), userWithRole);
    } catch (error) {
      console.error("Error adding user: ", error);
      return createErrorResponse("Error adding user");
    }
  };

  login = async (username, password) => {
    try {
      const q = query(usersCollectionRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return createErrorResponse("User not found");
      }
      const user = querySnapshot.docs[0].data();
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return createErrorResponse("Invalid credentials");
      }
      return { data: user };
    } catch (error) {
      console.error("Error logging in: ", error);
      return createErrorResponse("Error logging in");
    }
  };

  updateUser = async (id, updatedUser) => {
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, updatedUser);
      return { data: true };
    } catch (error) {
      console.error("Error updating user: ", error);
      return createErrorResponse("Error updating user");
    }
  };

  deleteUser = async (id) => {
    try {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      return { data: true };
    } catch (error) {
      console.error("Error deleting user: ", error);
      return createErrorResponse("Error deleting user");
    }
  };

  getUsers = (callback) => {
    const q = query(usersCollectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(usersData);
    });
    return unsubscribe;
  };

  getUserRole = async (id) => {
    try {
      const userDocRef = doc(db, "users", id);
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        return { data: userSnapshot.data().role };
      } else {
        return createErrorResponse("No such user!");
      }
    } catch (error) {
      console.error("Error getting user role: ", error);
      return createErrorResponse("Error getting user role");
    }
  };

  isAdmin = async (id) => {
    const roleResponse = await this.getUserRole(id);
    if (roleResponse.error) return false;
    return roleResponse.data === "admin";
  };

  isCustomer = async (id) => {
    const roleResponse = await this.getUserRole(id);
    if (roleResponse.error) return false;
    return roleResponse.data === "customer";
  };
}

export default new UserService();
