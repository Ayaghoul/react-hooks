import React from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <UserProfile name="aya" email="aya@gmail.com" />
      <UserProfile email="cc@gmail.com" />

      <Counter />
    </div>
  );
}

export default App;
