import AdminSidebar from "../components/AdminSidebar";

export default function BookingOverview() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <h2>Booking Overview</h2>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Slot</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User1</td>
              <td>A1</td>
              <td>10:00</td>
              <td>11:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
