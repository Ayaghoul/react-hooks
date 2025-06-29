import React from "react";

function UserProfile({ name, email }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Name :{name}</h2>
      <p>Email : {email}</p>
    </div>
  );
}

UserProfile.defaultProps = {
  name: "Nom inconnu",
};

export default UserProfile;
