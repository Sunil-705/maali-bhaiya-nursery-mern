# 🌿 Maali Bhaiya Nursery (MERN Stack)

A full-stack Nursery & Plant E-Commerce web application built using the MERN Stack. Users can browse plants, view product details, add items to cart, place orders, and manage purchases. Admins can add, edit, and delete products through an admin dashboard.

## 🚀 Live Demo

### Frontend

https://maali-bhaiya-nursery-mern.vercel.app/

### Backend API

https://maali-bhaiya-nursery-mern.onrender.com/

---

## ✨ Features

### Customer Features

* Browse all plants and products
* Search products by name
* Filter products by category
* View detailed product information
* Add products to cart
* Checkout and place orders
* View order history

### Admin Features

* Admin Dashboard
* Add New Products
* Edit Existing Products
* Delete Products
* Manage Orders
* View Total Products

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Icons
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.jsx

backend/
├── controllers/
├── models/
├── routes/
├── config/
└── server.js

---

## ⚙️ Environment Variables

Create a `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/maali-bhaiya-nursery.git
cd maali-bhaiya-nursery
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 📸 Screenshots

### Home Page

* Hero Section
* Featured Plants
* Responsive Design

### Shop Page

* Product Listing
* Search Functionality
* Category Filters

### Admin Dashboard

* Product Management
* Order Management

### Checkout

* Order Placement
* Customer Details Form

## 🔥 API Endpoints

### Products

```http
GET /api/products
GET /api/products/:id
GET /api/products/search
GET /api/products/related/:category
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

### Orders

```http
GET /api/orders
POST /api/orders
```

## 🌱 Future Improvements

* User Authentication & Authorization
* Payment Gateway Integration
* Image Upload using Cloudinary
* Wishlist Functionality
* Product Reviews & Ratings
* Admin Analytics Dashboard

## 👨‍💻 Author

Sunil Kumar

📧 Email: [sunilkumar.dev@gmail.com](mailto:sunilkumar.dev@gmail.com)

🌐 GitHub: https://github.com/Sunil-705

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you like this project, give it a star on GitHub!
