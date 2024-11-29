// regexValidations.js

// Regular expression for validating email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression for validating password
// Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regular expression for validating username
// Username must be alphanumeric and between 3 to 16 characters long
const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;

// Function to validate email
const validateEmail = (email) => {
  return emailRegex.test(email);
};

// Function to validate password
const validatePassword = (password) => {
  return passwordRegex.test(password);
};

// Function to validate username
const validateUsername = (username) => {
  return usernameRegex.test(username);
};

export { validateEmail, validatePassword, validateUsername };
