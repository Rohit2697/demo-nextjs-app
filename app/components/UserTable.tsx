import React from "react";

const UserTable: React.FC = () => {
  const users = [
    { slNo: 1, emailId: "user1@example.com" },
    { slNo: 2, emailId: "user2@example.com" },
    { slNo: 3, emailId: "user3@example.com" }
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ backgroundColor: "blue", color: "white" }}>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sl No</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email ID</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.slNo}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.slNo}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.emailId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
