import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
  username,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0 || remainingTime === targetTime * 1000;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>챌린지 실패</h2>}
      <p>
        목표 시간은,{" "}
        <strong>
          {targetTime}
          {formattedRemainingTime} seconds.
        </strong>
      </p>
      <p>
        {username}님은
        <strong>
          {formattedRemainingTime} seconds를 남기고 타이머를 멈췄습니다.
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>닫기</button>
      </form>
    </dialog>
  );
}
