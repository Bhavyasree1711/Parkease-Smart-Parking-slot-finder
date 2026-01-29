import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);

  return (
    <div className="card">
      <h2>Admin Login</h2>

      <input placeholder="Admin Email" />
      <input type="password" placeholder="Password" />

      {!otpSent ? (
        <button className="btn" onClick={() => setOtpSent(true)}>
          Send OTP
        </button>
      ) : (
        <>
          <input placeholder="Enter OTP" />
          <button className="btn" onClick={() => navigate("/admin")}>
            Verify & Login
          </button>
        </>
      )}
    </div>
  );
}
