import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
function App() {
  return (
    <>
      <p>States in React</p>
      {/* <Counter /> */}
      <LikeButton />
    </>
  );
}

export default App;
