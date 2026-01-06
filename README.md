
# Project Overview

This repository contains the frontend of the E-Commerce Product Management System built using React (Vite).
It includes both customer-facing UI and a secure admin dashboard for managing products, categories, and analytics.


# Features

## 1)User (Customer) Side

- User authentication (Login / Signup)
- Product listing & browsing
- Product categories & subcategories
- Cart UI
- Responsive design for all screen sizes

## 2)Admin Dashboard

- Secure admin login
- Add / update / delete products
- Upload product images (Cloudinary)
- Mark products as bestseller
- Product categorization
- Analytics & charts using **Recharts**

## Tech Stack

React (Vite)

React Router DOM

Context API (Global State Management)

Axios

JWT Authentication (stored in Local Storage)

Recharts (Admin Analytics)

CSS Modules

Cloudinary (Image uploads)
## Project Structure
```
src/
├── assets/          # Images & icons
├── components/      # Reusable UI components
├── context/         # Global context (Auth, User)
├── pages/           # Pages (Home, Login, Admin, etc.)
├── routes/          # Protected & public routes
├── styles/          # CSS modules
├── utils/           # Helper functions
├── App.jsx
└── main.jsx

```
## Deployment

Install Dependancies
```bash
  npm install
```

Create a .env file in the root directory:

```bash
    VITE_BACKEND_URL=http://localhost:8080
```

Start development Server

```bash
    npm run dev
```

## Authentication Flow


1) JWT token is received after login

2) Token is stored in Local Storage

3) Protected routes are handled using React Router

4) Admin routes are accessible only to admin users
## Demo

https://youtu.be/sSSdhi_nCRU?si=LtuZ-OgNeWJ23aqg

This video demonstrates all the functionalities of the application, showcasing both the customer-facing experience and the admin panel workflow.


## Dummy Admin Details

Email-address: none48504@gmail.com

Password: January@2026
