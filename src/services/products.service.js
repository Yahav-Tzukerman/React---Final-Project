import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  query,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const productsCollectionRef = collection(db, "products");

class ProductsService {
  addProduct = async (newProduct) => {
    try {
      const id = uuidv4();
      await setDoc(doc(db, "products", id), newProduct);
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  updateProduct = async (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    const obj = { id: id, product: updatedProduct };
    try {
      await updateDoc(productDoc, obj);
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    try {
      await deleteDoc(productDoc);
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  getProducts = (callback) => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(productsData); // Trigger the callback with the data
    });

    // Return the unsubscribe function to stop listening when needed
    return unsubscribe;
  };
}

export default new ProductsService();
