import { useNavigate } from "react-router-dom";

export default function Cities() {
  const navigate = useNavigate();

  const cities = [
    { name: "Bangalore", icon: "🌆" },
    { name: "Chennai", icon: "🌇" },
    { name: "Hyderabad", icon: "🏙️" }
  ];

  return (
    <div className="card" style={{ width: "900px" }}>
      <h2>Select City</h2>

      <div className="city-grid">
        {cities.map((city) => (
          <div
            key={city.name}
            className="city-card"
            onClick={() => navigate("/locations")}
          >
            <div className="city-icon">{city.icon}</div>
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
