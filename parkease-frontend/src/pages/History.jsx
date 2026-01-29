export default function History() {
  const history = [
    { id: 1, date: "10 Jan 2026", amount: "₹100" }
  ];

  return (
    <div className="card">
      <h2>Booking History</h2>

      {history.map((h) => (
        <div key={h.id} style={{ marginBottom: "15px" }}>
          <p><b>Date:</b> {h.date}</p>
          <p><b>Amount:</b> {h.amount}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
