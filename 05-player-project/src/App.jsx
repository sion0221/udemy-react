import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  const [username, setUsername] = useState("익명");

  return (
    <>
      <Player username={username} onSetUsername={setUsername} />

      <div id="challenges">
        <TimerChallenge title="입문" targetTime={1} username={username} />
        <TimerChallenge title="초급" targetTime={5} username={username} />
        <TimerChallenge title="중급" targetTime={10} username={username} />
        <TimerChallenge title="프로" targetTime={15} username={username} />
      </div>
    </>
  );
}

export default App;
