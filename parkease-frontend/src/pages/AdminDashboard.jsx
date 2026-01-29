import AdminSidebar from "../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <h2>Welcome Admin</h2>
        <p>Select an option from the sidebar.</p>
      </div>
    </div>
  );
}
