import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  console.log(location);
  return <div>Info that i got here is {location.state}</div>;
};

export default Dashboard;
