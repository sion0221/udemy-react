import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enterPlayerName, setEneterPlayerName] = useState(null);

  function handleClick() {
    setEneterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>환영합니다! {enterPlayerName ?? "익명"} 사용자님</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
