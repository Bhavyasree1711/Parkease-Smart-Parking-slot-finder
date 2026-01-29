export default function MyBookings() {
  const bookings = [
    { id: 1, city: "Bangalore", location: "Mall Parking", slot: "A1" }
  ];

  return (
    <div className="card">
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id} style={{ marginBottom: "15px" }}>
          <p><b>City:</b> {b.city}</p>
          <p><b>Location:</b> {b.location}</p>
          <p><b>Slot:</b> {b.slot}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
