import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setticket] = useState(genTicket(n));
  let iswinning = sum(ticket) === winningSum;
  let buyticket = () => {
    setticket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={buyticket}>Buy New Ticket</button>
      <h3>{iswinning && "Congratulations, you won..!"}</h3>
    </div>
  );
}
