import React, { useEffect, useState } from "react";

function UseUseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount2(count2 + 2)}>Click2</button>
    </div>
  );
}

export default UseUseEffect;
