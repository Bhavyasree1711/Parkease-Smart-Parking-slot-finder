import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const login = () => {
    if (role === "admin") navigate("/admin-login");
    else navigate("/dashboard");
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <div className="input-group">
        <label>Role</label>
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="input-group">
        <label>Email</label>
        <input placeholder="Enter email" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button className="btn" onClick={login}>
        Login
      </button>
    </div>
  );
}
