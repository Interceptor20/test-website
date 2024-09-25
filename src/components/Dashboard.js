import React, { useState } from 'react';


function Dashboard() {
    const workshopRequests = [
        { id: 'RE-TSL-2024091009-40', assetNo: 'OK123', submittedBy: 'Michael Joshua', relativeTime: 'about an hour from now', status: 'Pending' },
        { id: 'RE-TSL-2024091008-39', assetNo: 'T450', submittedBy: 'Gbemi', relativeTime: '20 minutes ago', status: 'Pending' },
        { id: 'RE-TSL-2024091003-38', assetNo: 'TR97', submittedBy: 'Nallini', relativeTime: '2 hours ago', status: 'Pending' },
      ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Logo</h2>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Activities</li>
          <li>Assets</li>
          <li>Profile</li>
          <li>Sign Out</li>
        </ul>
      </div>
      <div className="main-content">
        <button className="open-btn" onClick={toggleSidebar}>☰</button>
        <h1>Dashboard</h1>
        <div className="dashboard-header">
      <div className="status-box approved">1<br />Approved</div>
        <div className="status-box cancelled">4<br />Cancelled</div>
        <div className="status-box completed">3<br />Completed</div>
      </div>
      <div className="workshop-requests">
        <h3>Your Workshop Requests</h3>
        <input type="text" placeholder="Search for Asset..." />
        <button className="add-request">+</button>
      </div>

      <table className="requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Asset No</th>
              <th>Submitted by</th>
              <th>Relative Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workshopRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.assetNo}</td>
                <td>{request.submittedBy}</td>
                <td>{request.relativeTime}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  );
}


export default Dashboard;