import React from "react";
import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(null);
  const totalPercentage = 100;
  const startProgress = () => {
    if (timer) return; // Prevent starting a new timer if already running

    const newTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress =
          prevProgress < totalPercentage ? prevProgress + 5 : prevProgress;
        return nextProgress;
      });
    }, 1000);

    setTimer(newTimer);
  };

  const stopProgress = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const resetProgress = () => {
    stopProgress(); // Stop any existing timer
    setProgress(0); // Reset progress to 0
  };

  const resumeProgress = () => {
    if (!timer && progress > 0 && progress < totalPercentage) {
      startProgress();
    }
  };

  // Calculate the width of the progress bar
  const width = (progress / totalPercentage) * 100;

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${width}%` }}>
          <span className="progress-text">{`${progress}% / ${totalPercentage}%`}</span>
        </div>
      </div>
      <div className="controls">
        <button onClick={startProgress}>Start</button>
        <button onClick={stopProgress}>Stop</button>
        <button onClick={resetProgress}>Reset</button>
        <button onClick={resumeProgress}>Resume</button>
      </div>
    </div>
  );
};

export default ProgressBar;
