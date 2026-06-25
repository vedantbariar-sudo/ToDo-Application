# 📝 Full Stack Todo Application

A full-stack Todo application built with **React**, **Node.js**, **Express**, and **MongoDB**, featuring secure **JWT Authentication** and **Authorization**. Each user has their own account and can manage their personal tasks securely.

---

## 🚀 Features

* 🔐 User Registration
* 🔑 Secure Login using JWT Authentication
* 🔒 Password Hashing with bcrypt
* 👤 User-specific Tasks (Authorization)
* ➕ Add Tasks
* 🗑️ Delete Tasks
* 🔄 Persistent Login using Local Storage
* 🌐 Deployed Frontend & Backend
* 🧩 Component-based React Architecture

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* Fetch API
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📂 Project Structure

```text
Frontend
│
├── src
│   ├── components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Todo.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json


Backend
│
├── index.js
├── package.json
├── .env
└── models
```

---

## ⚙️ How It Works

### Registration

* User enters email and password.
* Password is hashed using **bcrypt**.
* User information is stored in MongoDB.

---

### Login

* User credentials are verified.
* Password is compared using bcrypt.
* A JWT is generated upon successful login.
* The token is stored in the browser's Local Storage.

---

### Authentication

Every protected request includes the JWT in the request headers.

```http
Authorization: Bearer <JWT_TOKEN>
```

The backend verifies the token before allowing access.

---

### Authorization

Each task is stored with the user's unique ID.

```javascript
{
    task: "Learn React",
    userId: "64f2..."
}
```

Whenever tasks are requested, only the tasks belonging to the logged-in user are returned.

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| POST   | `/register` | Register a new user   |
| POST   | `/login`    | Login and receive JWT |

### Tasks
Method  |	Endpoint   |   	Description                           | 
----------------------------------------------------------------|
GET	    |  /tasks	   |   Fetch all tasks for the logged-in user | 
POST    |	/tasks     | 	Add a new task                          |
DELETE	|  /tasks	   |   Delete a task                          |  
```

---

## 💻 Installation

### Clone the repository

```bash
git clone <repository-url>
```

---

### Backend

```bash
cd backend

npm install

npm start
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 📸 Screens

* Login Page
* Register Page
* Todo Dashboard

*(Screenshots/GIFs can be added here later.)*

---

## 📈 Future Improvements

* ✅ Edit Tasks
* ✅ Mark Tasks as Complete
* ✅ Due Dates
* ✅ Task Categories
* ✅ Search Tasks
* ✅ React Router
* ✅ Better UI/UX
* ✅ Loading Indicators
* ✅ Toast Notifications
* ✅ Dark Mode

---

## 🎯 Learning Outcomes

This project helped me understand:

* React State Management (`useState`)
* React Lifecycle (`useEffect`)
* Component-based Architecture
* Props
* REST APIs
* Express.js
* MongoDB & Mongoose
* Authentication vs Authorization
* JWT
* Password Hashing using bcrypt
* Middleware
* Deployment using Vercel and Render

---

## 👨‍💻 Author

**Vedant**

Built as a learning project to strengthen full-stack development skills using the MERN stack and modern authentication practices.

---

⭐ If you found this project interesting, consider giving it a star!
