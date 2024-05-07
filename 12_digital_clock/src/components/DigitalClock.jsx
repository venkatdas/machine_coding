import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  //   const localTime = time.toLocaleTimeString()
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const hour = formatNumber(time.getHours());
  const min = formatNumber(time.getMinutes());
  const sec = formatNumber(time.getSeconds());
  //   return <div className="">{hour}:{min}:{sec}</div>;

//   console.log("Component rendered with time:", time.toLocaleTimeString()); // Logs every render
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Clock</h1>
        <h2>
          {hour}:{min}:{sec}
        </h2>
      </header>
    </div>
  );
};

export default DigitalClock;
