import React from "react";

interface User {
  slNo: number;
  emailId: string;
}

const dummyData: User[] = [
  { slNo: 1, emailId: "user1@example.com" },
  { slNo: 2, emailId: "user2@example.com" },
  { slNo: 3, emailId: "user3@example.com" }
];

const UserTable: React.FC = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Sl No</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Email ID</th>
        </tr>
      </thead>
      <tbody>
        {dummyData.map((user) => (
          <tr key={user.slNo}>
            <td style={{ border: "1px solid black", padding: "8px" }}>{user.slNo}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{user.emailId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
