# JWT Authentication API 🚀

This is a simple **JWT-based authentication API** built with **Node.js, Express.js, MongoDB, and bcrypt.js**. It provides user registration and login functionality, secure password hashing, and token-based authentication.

## 🔹 Features
✅ User Registration  
✅ User Login with JWT Token  
✅ Password Hashing with bcrypt.js  
✅ Protected Routes Middleware  
✅ Error Handling & Validation  

---

## 📌 Technologies Used
- **Node.js** & **Express.js** - Backend framework  
- **MongoDB** & **Mongoose** - Database & ORM  
- **JWT (jsonwebtoken)** - Authentication  
- **bcrypt.js** - Password hashing  
- **dotenv** - Environment variable management  

---

## 🚀 **Installation & Setup**
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/KarunasriG/jwt-auth-backend.git
cd auth
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
npm start
```
OR for development:
```sh
npm run dev
```

---

## 🔑 **API Endpoints**
### 🔹 **User Registration**
**POST** `/api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```
✅ **Response:**
```json
{
  "message": "User registered successfully"
}
```

---

### 🔹 **User Login**
**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```
✅ **Response:**
```json
{
  "message": "User logged in successfully",
  "token": "your_jwt_token_here"
}
```

---

### 🔹 **Protected Route Example**
To access protected routes, send the JWT token in the `Authorization` header:
```
Authorization: Bearer your_jwt_token_here
```

---

## 📌 **Project Structure**
```
📦 auth
├── 📂 db
│   ├── db.connect.js     # Database connection
├── 📂 models
│   ├── User.js        # User model schema
├── 📂 routes
│   ├── auth.js     # Authentication routes (register, login)
├── 📂 middleware
│   ├── index.js # JWT verification middleware
├── 📂 validation
│   ├── index.js  # User data valiadation
├── .env                 # Environment variables
├── .gitignore           # Ignore node_modules, .env, etc.
├── index.js            # Main entry point
├── package.json       # Dependencies and scripts
|
├── LICENSE      
└── README.md            # Project documentation
```

---

## 🚀 **Contributing**
Feel free to fork this repo, create a branch, and submit a pull request with improvements!

---

---

## **License**  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

---

## ⭐ **Show Some Support!**
If you find this helpful, please ⭐ the repository! 😊

```
