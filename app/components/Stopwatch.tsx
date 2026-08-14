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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      color: '#fff',
      fontSize: '1.5rem',
      textAlign: 'center',
      margin: '1rem auto'
    }}>
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
      <button onClick={handleStartStop} style={{ marginTop: '0.5rem' }}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ marginTop: '0.5rem' }}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
