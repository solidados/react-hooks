import { useCallback, useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback((): void => {
    const currentTime = Date.now();

    setStartTime((prevStartTime) => prevStartTime ?? currentTime);
    setNow(currentTime);

    intervalRef.current = setInterval((): void => {
      setNow(Date.now());
    }, 10);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleStartStop = useCallback(() => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
    setIsRunning((prevState) => !prevState);
  }, [stopTimer, startTimer, isRunning]);

  const handleReset = useCallback(() => {
    stopTimer();
    setStartTime(null);
    setNow(null);
    setIsRunning(false);
  }, [stopTimer]);

  let secondsPassed: number = 0;

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Time Passed</h2>
      <h3>{secondsPassed.toFixed(3)}</h3>
      <div className="buttons">
        <button
          className="btn btn-outline-secondary border-0"
          onClick={handleReset}
        >
          ⏏︎
        </button>
        <button
          className="btn btn-outline-secondary border-0"
          onClick={handleStartStop}
        >
          {isRunning ? "■" : "▶"}
          {/*{isRunning ? "🅂🅃🄾🄿" : "🅁🅄🄽"}*/}
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
