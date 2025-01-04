# 🚀 React Final Project

## 🌐 Demo

🎉 Explore the live application 👉 [here](https://react-final-project-kappa.vercel.app/).

This project is a React application enhanced with **Redux** for state management and **Firebase** for backend services. It demonstrates advanced React patterns, state management, and integration with modern tools.

---

## 📋 Table of Contents

- [🚀 Features](#-features)
- [⚙️ Installation](#️-installation)
- [▶️ Usage](#️-usage)
- [👤 Test Users](#-test-users)
- [🔍 Key Features](#-key-features)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ⚙️ Installation

To install the project dependencies, run the following command:

1. Clone the repository:
   ```bash
   git clone https://github.com/Yahav-Tzukerman/React---Final-Project.git
   cd React---Final-Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add Firebase configuration:

- Create a .env file in the root directory.
- Add the following environment variables:
  ```bash
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```

## ▶️ Usage

To run the project locally:

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```bash
   http://localhost:5173
   ```

## 👤 Test Users

Use the following test users to explore the application's features:

### Admin User

- **Email:** `Admin`
- **Password:** `Admin123!`
- **Features:**
  - Manage users and data.
  - Access admin-specific functionality.
  - View all records in the database.

### Customer User

- **Email:** `Customer`
- **Password:** `Customer123!`
- **Features:**
  - View and interact with the main application.
  - Limited access to admin features.
  - Personalized dashboard and data.

These users are pre-configured in the Firebase Authentication and Firestore database for testing purposes.

## 🔍 Key Features

- 🔄 Redux for State Management
  - Efficiently manage global state with Redux, utilizing slices and actions for clean and scalable code.
- 🔥 Firebase Integration
  Seamlessly integrated Firebase for:
  - User authentication (Email/Password)
  - Firestore database for storing and retrieving data in real time.
- 🎨 Component-Based Architecture
  - Modular, reusable components following React best practices.
- 🌐 API Integration
  - Fetch and display data from external APIs with Axios.
- 📱 Responsive Design
  - Fully responsive, mobile-first design for all screen sizes.
- ✏️ Form Handling
  - Controlled and uncontrolled form components.
  - Validation with helpful error messages.
- 💅 Dynamic Styling
  - Uses CSS Modules and Styled Components for scoped, dynamic, and theme-based styling.
- 📦 Optimized Build
  - Built with Vite for blazing-fast development.
  - Configured for production deployment.

## 🤝 Contributing

🙌 Contributions are always welcome! Here's how you can help:

1. Fork the project.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

```bash
 git commit -m "Add your message here"
```

4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
