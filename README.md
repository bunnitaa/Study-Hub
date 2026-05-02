# Study Group Backend API

## 📌 Project Overview
This is a Node.js + Express + MongoDB backend for a Study Group and Messaging system.  
It allows users to create groups, send messages, and manage data securely using authentication.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ⚙️ How to Run the Project

1. Install dependencies:
npm install

2. Create a .env file and add:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

3. Start the server:
npm run dev

---

## 🔐 Authentication APIs
POST /api/auth/signup → Register user  
POST /api/auth/login → Login user (returns token)  111111
GET /api/auth/me → Get logged-in user  

---

## 👥 Study Group APIs
POST /api/groups → Create group  
GET /api/groups → Get all groups  
GET /api/groups/:id → Get single group  
PUT /api/groups/:id → Update group  
DELETE /api/groups/:id → Delete group  

---

## 💬 Message APIs
POST /api/messages → Create message  
GET /api/messages → Get all messages  
GET /api/messages/group/:groupId → Get messages by group  
PUT /api/messages/:id → Update message  
DELETE /api/messages/:id → Delete message  

---

## 🔑 Authorization
All protected routes require:
Authorization: Bearer YOUR_TOKEN

Token is generated from login API.

---

## 🧪 Testing
All APIs were tested using Thunder Client.

---

## 👨‍💻 Author
Karan Manjani