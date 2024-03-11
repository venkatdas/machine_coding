import React, { useState } from "react";
import data from "./data";
import Accordian from "./components/Accordian";
const App = () => {
  //data is passing into the accordianData
  const [accordionData, setAccordionData] = useState(data);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FAQ's</h1>
      {accordionData.map((data) => {
        return <Accordian key={data.id} {...data} />;
      })}
    </div>
  );
};

export default App;
