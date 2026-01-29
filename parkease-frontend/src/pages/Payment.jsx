import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const summary = JSON.parse(localStorage.getItem("parkingSummary"));

  const hours = Math.max(1, Math.ceil(summary.durationSeconds / 3600));
  const amount = hours * 50;

  const handlePayment = () => {
    localStorage.removeItem("parkingSession");
    localStorage.removeItem("parkingSummary");
    navigate("/receipt");
  };

  return (
    <div className="card">
      <h2>Payment</h2>

      <p><b>Duration:</b> {hours} hour(s)</p>
      <p><b>Rate:</b> ₹50 / hour</p>
      <p><b>Total Amount:</b> ₹{amount}</p>

      <input placeholder="UPI ID or Card Number" />

      <button className="btn" onClick={handlePayment}>
        Pay ₹{amount}
      </button>
    </div>
  );
}
