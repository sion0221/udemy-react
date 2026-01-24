import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, result, targetTime, username }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>챌린지 {result}</h2>
      <p>
        목표 시간은, <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        {username}님은,
        <strong> X seconds를 남기고 타이머를 멈췄습니다.</strong>
      </p>
      <form method="dialog">
        <button>닫기</button>
      </form>
    </dialog>
  );
}
