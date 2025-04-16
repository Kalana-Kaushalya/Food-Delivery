# 🍅 Tomato - Full Stack Food Delivery App

A complete food ordering platform built with the MERN stack (MongoDB, Express, React, Node.js) featuring Stripe payment integration. This project delivers a comprehensive solution with a customer-facing website, admin dashboard, and secure backend.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Payment Testing](#payment-testing)
- [Screenshots](#screenshots)
  

## ✨ Features

### Customer Portal
- **Authentication** - User registration and login with JWT
- **Food Exploration** - Browse menu items filtered by categories
- **Shopping Cart** - Add/remove items with quantity management
- **Checkout Process** - Secure payment processing with Stripe
- **Order Management** - View order history and track delivery status

### Admin Dashboard
- **Secure Admin Access** - Protected login for administrators
- **Order Management** - View and process all customer orders
- **Status Updates** - Change order status (Preparing, Out for Delivery, Delivered)
- **Menu Control** - Add, edit, and remove menu items
- **Inventory Management** - Update product availability and pricing

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React.js, React Router DOM, Context API, Axios |
| **Styling** | CSS, React Toastify for notifications |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT) |
| **Payment Processing** | Stripe API |
| **Development Tools** | Git, GitHub, dotenv, Postman |

## 📁 Project Structure

```
tomato-food-delivery/
├── backend/           # Node.js + Express server
│   ├── controllers/   # Request handlers
│   ├── models/        # Database models
│   ├── routes/        # API endpoints
│   └── middleware/    # Auth and validation
│
├── frontend/          # React customer application
│   ├── public/        # Static files
│   └── src/           # React components & logic
│
└── admin/             # React admin dashboard
    ├── public/        # Static files
    └── src/           # Admin components & logic
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Clone Repository
```bash
git clone https://github.com/Kalana-Kaushalya/Tomato-Food-Delivery
cd tomato-food-delivery
```

### Backend Setup
```bash
cd backend
npm install
# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run server
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```

## 💻 Usage
- **Customer Website**: http://localhost:5173
- **Admin Dashboard**: http://localhost:5174
- **Backend API**: http://localhost:4000

## 💳 Payment Testing

Use these Stripe test credentials to simulate transactions:

| Field | Value |
|-------|-------|
| Card Number | 4242 4242 4242 4242 |
| Expiry Date | Any future date (MM/YY) |
| CVC | Any 3 digits |

## 📸 Screenshots
![image alt](https://github.com/Kalana-Kaushalya/Tomato-Food-Delivery/blob/main/screenshot1.png?raw=true)

