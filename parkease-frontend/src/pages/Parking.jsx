import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Parking() {
  const navigate = useNavigate();

  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const startTimer = () => {
    setRunning(true);
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setRunning(false);

    const endTime = Date.now();
    const durationSeconds = Math.floor((endTime - startTime) / 1000);

    localStorage.setItem(
      "parkingSummary",
      JSON.stringify({ durationSeconds })
    );

    navigate("/payment");
  };

  return (
    <div className="card">
      <h2>Parking Timer</h2>

      <h1>
        ⏱ {Math.floor(seconds / 60)}:
        {String(seconds % 60).padStart(2, "0")}
      </h1>

      {!running ? (
        <button className="btn" onClick={startTimer}>
          ▶️ Start Timer
        </button>
      ) : (
        <button className="btn" onClick={stopTimer}>
          ⏹️ Stop Timer
        </button>
      )}
    </div>
  );
}
