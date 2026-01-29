import { useState } from "react";
import "../styles/auth.css";

export default function Register({ onBackToLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    vehicleNumber: "",
    vehicleType: "CAR",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error(await res.text());
      onBackToLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleRegister}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="vehicleNumber" placeholder="Vehicle Number" onChange={handleChange} required />

          <select name="vehicleType" onChange={handleChange}>
            <option value="CAR">Car</option>
            <option value="BIKE">Bike</option>
          </select>

          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>

        <div className="link" onClick={onBackToLogin}>
          Back to Login
        </div>
      </div>
    </div>
  );
}
