export default function UserDashboard({ onLogout }) {
  return (
    <div style={{ padding: 30 }}>
      <h2>User Dashboard</h2>
      <p>Welcome, User</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
