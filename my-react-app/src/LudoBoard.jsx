import { useState } from "react";

export default function LudoBoard() {
  let [moves, setmoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });
  let [count, setcount] = useState(0);

  let updateBlue = () => {
    console.log(moves.blue);
    setmoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateYellow = () => {
    console.log(moves.yellow);
    setmoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    console.log(moves.green);
    setmoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let updateRed = () => {
    console.log(moves.red);
    setmoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begin</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
