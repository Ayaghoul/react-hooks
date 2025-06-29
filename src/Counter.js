import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    alert(`Vous avez cliqué ${newCount} fois`);
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h2>Compteur</h2>
      <h3>{count}</h3>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  );
}

export default Counter;
