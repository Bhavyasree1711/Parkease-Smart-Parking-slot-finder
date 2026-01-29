import AdminSidebar from "../components/AdminSidebar";

export default function Reports() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <h2>Monthly Usage Reports</h2>

        <p>Total Bookings: 120</p>
        <p>Peak Hours: 10 AM – 1 PM</p>
        <p>Average Duration: 1.4 hrs</p>

        <hr />

        <h4>Export Reports</h4>
        <input type="date" />
        <input type="date" />
        <button className="btn">Download CSV</button>
      </div>
    </div>
  );
}
