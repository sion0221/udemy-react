import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="입문" targetTime={1} />
        <TimerChallenge title="초급" targetTime={5} />
        <TimerChallenge title="중급" targetTime={10} />
        <TimerChallenge title="프로" targetTime={15} />
      </div>
    </>
  );
}

export default App;
