import { useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(4);

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state =!updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData)
  };

  // const checkboxData = [
  //   { title: "Include Uppercase Letters", state: false },
  //   { title: "Include Lowercase Letters", state: false },
  //   { title: "Include Numbers", state: false },
  //   { title: "Include Symbols", state: false },
  // ];
  return (
    <div className="container">
      {/* password text and copy button */}
      <div className="header">
        <div className="title">fjhsdjhfjksdufsdj</div>
        <button className="copyBtn" onClick={() => {}}>
          Copy
        </button>
      </div>

      {/* character Length */}

      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* checkboxes */}

      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkbox.state}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* strength */}

      {/* generate button password */}

      <button className="generateBtn" onClick={() => {}}>
        Generate Password
      </button>
    </div>
  );
}

export default App;
