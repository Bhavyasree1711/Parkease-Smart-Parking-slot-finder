# 🚗 ParkEase – Smart Parking Management System

ParkEase is a **full-stack Smart Parking Management System** designed for **Smart City and real-time parking use cases**.  
The system enables users to **find, book, and pay for parking slots** while providing administrators with **complete operational control, analytics, and reporting**.

---

## 🏗️ Project Structure
SmartParking/
├── frontend/ → React.js application
└── backend/ → Spring Boot REST API

---

## 🚀 Technology Stack

### Frontend
- React.js (Vite)
- JavaScript (ES6)
- CSS (Card-based UI)
- React Router
- Google Maps Embed

### Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database
- Maven

---

## 👥 User Roles & Access

### 👤 User
- Register & Login
- View user dashboard
- Book parking slots
- Start & stop parking timer
- Pay parking charges
- View receipts & booking history

### 🛠️ Admin
- Secure login (Email + Password + OTP)
- Admin dashboard with side navigation
- Slot management (Add / Edit / Remove)
- Monitor live & past bookings
- Generate parking usage reports
- Export reports in CSV format

---

## 🧭 User Workflow

1. User Login / Registration  
2. Dashboard  
3. City Selection  
4. Location Selection (Google Maps view)  
5. Slot Selection  
   - 🟢 Available slots  
   - 🔴 Booked slots  
6. Parking Page  
   - Start Timer  
   - Stop Timer  
7. Payment Page  
   - Automatic billing  
   - ₹50 per hour (rounded up)  
8. Receipt Generation  

---

## 🧭 Admin Workflow

1. Select role as **Admin**  
2. Admin Login (Email, Password, OTP)  
3. Admin Panel  
   - Slot Management  
   - Booking Overview  
   - Monthly Usage Reports  
   - CSV Export  

---

## ⏱️ Parking & Billing Logic

- Parking timer is **user-controlled**
- Timer starts only after clicking **Start Timer**
- Timer stops on **Stop Timer**
- Billing rate: **₹50 per hour**
- Partial hours are **rounded up**
- Minimum charge: **1 hour**

---

## 📊 Key Features

- Role-based authentication (User / Admin)
- Real-time parking timer
- Dynamic billing calculation
- Card-based modern UI
- Google Maps parking location view
- Admin analytics & usage monitoring
- CSV report export

---

## ▶️ How to Run the Project Locally

### Run Frontend

```bash
cd frontend
npm install
npm run dev


