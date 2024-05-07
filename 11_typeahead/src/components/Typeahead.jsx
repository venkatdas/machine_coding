import React, { useState } from "react";

const Typeahead = ({ SuggistionsData }) => {
  const [input, setInput] = useState(""); // for managing the input
  const [filterValues, setFilterValues] = useState([]);
  const [showSuggistions, setShowSuggitions] = useState(false);

  const handleInputChange = (e) => {
    const inuputValuee = e.target.value;
    setInput(inuputValuee);

    const filtered = SuggistionsData.filter((suggition) =>
      suggition.toLowerCase().includes(inuputValuee.toLowerCase())
    );
    setFilterValues(filtered);
    setShowSuggitions(true);
  };

  const handleSuggistionClick = (inuputValuee) => {
    setInput(inuputValuee);
    setFilterValues([]);
    setShowSuggitions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggitions(false);
    }, 150);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Type Something..."
      />
      {filterValues.map((sugg, index) => {
        return (
          <li key={index} onClick={() => handleSuggistionClick(sugg)}>
            {sugg}
          </li>
        );
      })}
    </div>
  );
};

export default Typeahead;
