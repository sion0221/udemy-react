import { useRef } from "react";

export default function Player({ username, onSetUsername }) {
  const playerName = useRef(null);

  function handleClick() {
    const enteredName = playerName.current.value.trim();
    onSetUsername(enteredName === "" ? "익명" : enteredName);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        챌린지에 참여하신, <strong>{username ?? "익명"}</strong>님을 환영합니다!
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
