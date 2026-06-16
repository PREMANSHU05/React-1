import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
export default function Lottery() {
  let [ticket, setticket] = useState(genTicket(3));
  let iswinning = sum(ticket) === 15;
  let buyticket = () => {
    setticket(genTicket(3));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyticket}>Buy New Ticket</button>
      <h3>{iswinning && "Congratulations, you won..!"}</h3>
    </div>
  );
}
