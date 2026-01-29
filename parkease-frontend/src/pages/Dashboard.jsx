import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const history = [
    { date: "12 Jan 2026", slot: "A1", amount: "₹50" },
    { date: "08 Jan 2026", slot: "B2", amount: "₹100" }
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-main">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="profile">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
              alt="user"
            />
            <span>Welcome, User</span>
          </div>

          <button
            className="book-btn"
            onClick={() => navigate("/cities")}
          >
            🚗 Book a Slot
          </button>
        </div>

        {/* CONTENT */}
        <div className="dashboard-grid">
          {/* LEFT SIDE */}
          <div>
            <h3>Active Parking</h3>
            <p>No active parking session</p>
          </div>

          {/* RIGHT SIDE */}
          <div className="history-card">
            <h3>User History</h3>

            {history.map((h, i) => (
              <div key={i} className="history-item">
                <span>{h.date}</span><br />
                Slot {h.slot} — {h.amount}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
