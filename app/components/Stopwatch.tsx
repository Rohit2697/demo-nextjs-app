import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Stopwatch</h2>
      <p>{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset} disabled={time === 0}>Reset</button>
    </div>
  );
};

export default Stopwatch;
