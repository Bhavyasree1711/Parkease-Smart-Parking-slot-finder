import { useNavigate } from "react-router-dom";

export default function Slots() {
  const navigate = useNavigate();

  const slots = [
    { id: "A1", booked: false },
    { id: "A2", booked: true },
    { id: "A3", booked: false },
    { id: "B1", booked: true },
    { id: "B2", booked: false }
  ];

  const bookSlot = (slotId) => {
  const parkingSession = {
    slotId,
    startTime: Date.now()
  };

  localStorage.setItem("parkingSession", JSON.stringify(parkingSession));
  navigate("/parking"); // NOT payment
};


  return (
    <div className="card">
      <h2>Select Parking Slot</h2>

      <div className="slot-grid">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={`slot-card ${slot.booked ? "booked" : "available"}`}
            onClick={() => !slot.booked && bookSlot(slot.id)}
          >
            {slot.id}
          </div>
        ))}
      </div>
    </div>
  );
}
