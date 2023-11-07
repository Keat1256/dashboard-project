import React from "react";

function RoleAuth({ userRole, allowedRole, children }) {
  console.log("userRole:", userRole);
  console.log("allowedRole:", allowedRole);

  // Check if the userRole matches the allowedRole
  if (userRole === allowedRole) {
    return children; // Render the children if the roles match
  } else {
    // You can customize this part to handle unauthorized access
    return <div>Unauthorized Access</div>;
  }
}

export default RoleAuth;
