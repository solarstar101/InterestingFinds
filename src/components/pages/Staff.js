import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  var click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> Staff</h1>
      <p>{count} </p>
      <button onClick={click}> Button Here </button>
    </div>
  );
}
