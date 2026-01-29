export default function AdminDashboard({ onLogout }) {
  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
