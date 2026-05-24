import { useState } from "react";

export default function Counter() {
  let [count, setcount] = useState(0);
  let inCount = () => {
    setcount(count + 1);
    // console.log(count);
  };
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}
