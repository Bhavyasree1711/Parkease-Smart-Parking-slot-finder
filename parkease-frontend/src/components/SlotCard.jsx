export default function SlotCard({ slot, onBook }) {
  return (
    <div
      className="slot"
      style={{ backgroundColor: slot.booked ? "red" : "green" }}
      onClick={() => !slot.booked && onBook()}
    >
      Slot {slot.id}
    </div>
  );
}
