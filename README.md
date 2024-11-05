# 🚀 Drive Application 📂

A Drive-like application built with **MongoDB**, **Express**, **EJS**, **JWT** authentication, **Bcrypt** for password hashing, **Firebase Storage** for file storage, and styled with **Tailwind CSS** and **Flowbite**. Users can register, upload, download, and manage their files securely with role-based access.

---

## 🛠️ Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-E6B91E?style=for-the-badge&logo=ejs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Bcrypt](https://img.shields.io/badge/Bcrypt-orange?style=for-the-badge&logo=bcrypt&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-FFAB40?style=for-the-badge&logo=flowbite&logoColor=white)

---

## 📜 Features

- 🔒 **User Authentication** - Secure registration and login with JWT
- 🔐 **Password Hashing** - Secure password storage using Bcrypt
- 📂 **File Management** - Upload, download, and delete files
- 🛑 **Role-based Access** - Admin and user roles with different permissions
- 🌐 **Responsive UI** - Styled with Tailwind CSS and Flowbite for a clean, mobile-friendly interface
- 📊 **Firebase Storage Integration** - All user-generated files are stored on Firebase Storage

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase Account](https://firebase.google.com/)

### Installation

Clone the repository:

```
git clone https://github.com/yourusername/drive-like-app.git

cd drive
```
Install dependencies:

```
npm install
```

Set up Firebase Storage:

- Go to Firebase Console and create a project.
- Enable Firebase Storage and set up the storage bucket.
- Copy the Firebase configuration settings (API key, project ID, storage bucket, etc.).

🗃️ Project Structure
```
drive/
├── config/               # Configuration files
├── controllers/          # Controllers for handling requests
├── models/               # Mongoose models
├── public/               # Static assets
│   ├── css/              # CSS files
│   └── js/               # JavaScript files
├── routes/               # API routes
├── views/                # EJS templates
└── .env                  # Environment variables
```

📚 Usage

User Authentication

- Registration: Users can register by providing a username, email, and password.
- Login: Users can log in with their credentials to access their dashboard.

File Management

- Upload Files: Users can upload files that are securely stored in Firebase Storage.
- View Files: Users can view a list of their uploaded files.
- Download/Delete Files: Users can download or delete files from their account.

🔐 Security Features

- Passwords are hashed with Bcrypt before being stored in the MongoDB database.
- JWT is used for secure, token-based authentication.

⚙️ Firebase Storage Setup

- Go to the Firebase Console and enable Storage for your project.
- Set read and write permissions for Firebase Storage if required.
- Add Firebase configuration details in the .env file.

📜 License

This project is licensed under the MIT License.
📧 Contact

For inquiries, please contact strangecode93@gmail.com

Enjoy using this Drive application! Contributions and suggestions are welcome! 😊