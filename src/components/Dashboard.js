import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Dashboard = ({ loggedIn, role }) => {
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  let dashboardContent;
  if (role === 'SOCIAL WORK COMITTEE') {
    dashboardContent = <h2>Welcome, Social work comitee!</h2>;
  } else if (role === 'EMPLOYEE') {
    dashboardContent = <h2>Welcome, Employee!</h2>;
  } else {
    dashboardContent = <h2>error!!</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {dashboardContent}
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default Dashboard;
