import { useNavigate } from "react-router-dom";

export default function Locations() {
  const navigate = useNavigate();

  const locations = [
    { name: "Mall Parking", slots: 25 },
    { name: "Metro Station Parking", slots: 40 },
    { name: "IT Park Parking", slots: 18 }
  ];

  return (
    <div className="card" style={{ width: "1000px" }}>
      <h2>Select Parking Location</h2>

      <iframe
        title="Parking Map"
        width="100%"
        height="280"
        style={{ borderRadius: "14px", marginBottom: "20px" }}
        loading="lazy"
        src="https://www.google.com/maps?q=parking+near+me&output=embed"
      ></iframe>

      <div className="location-grid">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="location-card"
            onClick={() => navigate("/slots")}
          >
            <h4>{loc.name}</h4>
            <p>Available Slots: {loc.slots}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
