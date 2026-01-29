import { useEffect, useState } from "react";

export default function Timer({ onExpire }) {
  const [seconds, setSeconds] = useState(300); // 5 minutes

  useEffect(() => {
    if (seconds === 0) {
      onExpire();
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onExpire]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#203a43",
        color: "white",
        padding: "12px 16px",
        borderRadius: "20px",
        fontWeight: "600",
        zIndex: 1000
      }}
    >
      ⏱ {Math.floor(seconds / 60)}:
      {String(seconds % 60).padStart(2, "0")}
    </div>
  );
}
