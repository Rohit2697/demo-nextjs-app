import React from 'react';

const UserTable: React.FC = () => {
  const data = [
    { slNo: 1, emailId: 'user1@example.com' },
    { slNo: 2, emailId: 'user2@example.com' },
    { slNo: 3, emailId: 'user3@example.com' }
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sl No</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.slNo}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.slNo}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.emailId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
