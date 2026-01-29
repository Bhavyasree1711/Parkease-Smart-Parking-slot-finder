import { useNavigate } from "react-router-dom";

export default function Receipt() {
  const navigate = useNavigate();

  return (
    <div className="receipt-card">
      <div className="receipt-header">
        <div className="success">✔</div>
        <h2>Payment Successful</h2>
      </div>

      <div className="receipt-body">
        <div className="receipt-row">
          <span>City</span>
          <span>Bangalore</span>
        </div>

        <div className="receipt-row">
          <span>Location</span>
          <span>Mall Parking</span>
        </div>

        <div className="receipt-row">
          <span>Slot</span>
          <span>A1</span>
        </div>

        <div className="receipt-row">
          <span>Duration</span>
          <span>1 Hour</span>
        </div>

        <div className="receipt-divider"></div>

        <div className="receipt-row">
          <span>Amount Paid</span>
          <span>₹100</span>
        </div>

        <div className="receipt-row">
          <span>Payment Mode</span>
          <span>UPI</span>
        </div>

        <div className="receipt-row">
          <span>Transaction ID</span>
          <span>TXN123456</span>
        </div>
      </div>

      <div className="receipt-footer">
        <button className="btn" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
