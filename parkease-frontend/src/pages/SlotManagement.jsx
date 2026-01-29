import AdminSidebar from "../components/AdminSidebar";

export default function SlotManagement() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <h2>Slot Management</h2>

        <input placeholder="Slot ID" />
        <input placeholder="Location" />
        <button className="btn">Add Slot</button>

        <hr />

        <p>Existing Slots</p>
        <ul>
          <li>A1 – Mall Parking <button>Edit</button> <button>Remove</button></li>
          <li>B2 – Metro Parking <button>Edit</button> <button>Remove</button></li>
        </ul>
      </div>
    </div>
  );
}
