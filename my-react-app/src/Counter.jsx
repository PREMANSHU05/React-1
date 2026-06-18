import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setcountx] = useState(0);
  let [county, setcounty] = useState(0);
  let inccountx = () => {
    setcountx((currcount) => currcount + 1);
  };
  let inccounty = () => {
    setcounty((currcount) => currcount + 1);
  };

  useEffect(function printsomething() {
    console.log("this is use effect");
  }, []);

  return (
    <div>
      <h3>countx = {countx}</h3>
      <button onClick={inccountx}>+1</button>
      <h3>county = {county}</h3>
      <button onClick={inccounty}>+1</button>
    </div>
  );
}
