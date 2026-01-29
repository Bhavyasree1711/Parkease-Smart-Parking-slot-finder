import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Cities from "../pages/Cities";
import Locations from "../pages/Locations";
import Slots from "../pages/Slots";
import Payment from "../pages/Payment";
import Receipt from "../pages/Receipt";
import MyBookings from "../pages/MyBookings";
import History from "../pages/History";
import Parking from "../pages/Parking";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import SlotManagement from "../pages/SlotManagement";
import BookingOverview from "../pages/BookingOverview";
import Reports from "../pages/Reports";





export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/slots" element={<Slots />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/receipt" element={<Receipt />} />
      <Route path="/my-bookings" element={<MyBookings />} />
<Route path="/history" element={<History />} />
<Route path="/parking" element={<Parking />} />

<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/slots" element={<SlotManagement />} />
<Route path="/admin/bookings" element={<BookingOverview />} />
<Route path="/admin/reports" element={<Reports />} />


    </Routes>
  );
}
