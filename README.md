🍅 Tomato - Full Stack Food Delivery App
A complete Food Ordering Web Application built using the MERN Stack (MongoDB, Express, React, Node.js) with Stripe Payment Gateway integration. This project includes a user-facing website, admin panel, and secure backend server, offering a seamless food ordering experience.

🚀 Features
👨‍🍳 User Side
User registration & login (JWT Auth)

Browse food items by category

Add/remove items to shopping cart

Place orders with Stripe online payment

View past orders and delivery status

🛠️ Admin Panel
Admin login

View and manage all orders

Update order status (e.g., Processing → Delivered)

Manage menu items (add, edit, delete)

🧰 Tech Stack
Layer	Technologies Used
Frontend	React JS, React Router, Axios, CSS, React Toastify
Backend	Node.js, Express.js, MongoDB, Mongoose, JWT
Payment	Stripe API
Other	Git, GitHub, Dotenv, Postman

📁 Project Structure
tomato-food-delivery/
├── backend/       # Node.js + Express server (API & DB)
├── frontend/      # React client app for users
└── admin/         # React admin dashboard for order management

💳 Stripe Test Card
Use the following test card details to simulate payments:

Card Number: 4242 4242 4242 4242

Expiry Date: Any future date (e.g., 12/34)

CVC: Any 3 digits (e.g., 123)

🛠️ Getting Started
1.Clone the repository
git clone https://github.com/Kalana-Kaushalya/Tomato-Food-Delivery

cd tomato-food-delivery

2.Setup Backend
cd backend
npm install
npm run server

3.Setup Frontend
cd ../frontend
npm install
npm run dev

4.Setup Admin Panel
cd ../admin
npm install
npm run dev



