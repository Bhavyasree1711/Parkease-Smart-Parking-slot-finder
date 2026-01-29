import { useState } from "react";
import "../styles/auth.css";

export default function Login({ onUserLogin, onAdminLogin, onRegister }) {
  const [role, setRole] = useState("USER");

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const [error, setError] = useState("");

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleNumber, password })
      });

      if (!res.ok) throw new Error("Invalid credentials");
      const data = await res.json();
      onUserLogin(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, token })
      });

      if (!res.ok) throw new Error("Invalid admin credentials");
      const data = await res.json();
      onAdminLogin(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Smart Parking</h2>
        <p className="muted">Sign in to continue</p>

        <div className="role-switch">
          <button
            className={role === "USER" ? "active" : ""}
            onClick={() => setRole("USER")}
          >
            User
          </button>
          <button
            className={role === "ADMIN" ? "active" : ""}
            onClick={() => setRole("ADMIN")}
          >
            Admin
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {role === "USER" ? (
          <form onSubmit={handleUserLogin}>
            <input
              placeholder="Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>

            <div className="link" onClick={onRegister}>
              Not registered? Create account
            </div>
          </form>
        ) : (
          <form onSubmit={handleAdminLogin}>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="Admin Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
            <button type="submit">Admin Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
