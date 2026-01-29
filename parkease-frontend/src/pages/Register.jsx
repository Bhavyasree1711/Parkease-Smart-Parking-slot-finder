import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Create Account</h2>

      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Create password" />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" />
      </div>

      <button className="btn" onClick={() => navigate("/")}>
        Register
      </button>

      <div className="link">
        Already have an account?{" "}
        <span onClick={() => navigate("/")}>Login</span>
      </div>
    </div>
  );
}
