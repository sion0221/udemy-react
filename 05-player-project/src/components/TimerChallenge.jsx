export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} {targetTime > 1 ? "초" : ""}
      </p>
      <p>
        <button>챌린지 시작</button>
      </p>
      <p className="">시간이 가는 중... / Timer inactive</p>
    </section>
  );
}
