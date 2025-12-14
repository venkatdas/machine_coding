import { useState } from "react";


export default function App() {
  const [celcius, setCelcius] = useState("");
  const [farenheat, setFarenheat] = useState("");

  return (
    <div className="App">
      <div className="text-box">
        <input
          type="number"
          placeholder="Celcius"
          value={celcius}
          onChange={(e) => {
            const celcius = e.target.value;
            setCelcius(celcius);
            if (celcius === "" || isNaN(celcius)) {
              setFarenheat("");
              return;
            }
            //calculating here 
            const farenheat = ((celcius * 9) / 5 + 32).toFixed(4);
            setFarenheat(farenheat);
          }}
        />
        =
        <input
          type="number"
          placeholder="Farenheat"
          value={farenheat}
          onChange={(e) => {
            const farenheat = e.target.value;
            setFarenheat(farenheat);
            if (farenheat === "" || isNaN(farenheat)) {
              setCelcius("");
              return;
            }
            const celsius = (((farenheat - 32) * 5) / 9).toFixed(4);
            setCelcius(celsius);
          }}
        />
      </div>
    </div>
  );
}
