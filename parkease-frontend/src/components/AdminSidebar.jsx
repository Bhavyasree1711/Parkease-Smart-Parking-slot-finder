import { useNavigate } from "react-router-dom";
import "../assets/admin.css";

export default function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>
      <button onClick={() => navigate("/admin/slots")}>Slot Management</button>
      <button onClick={() => navigate("/admin/bookings")}>Booking Overview</button>
      <button onClick={() => navigate("/admin/reports")}>Reports</button>
    </div>
  );
}
