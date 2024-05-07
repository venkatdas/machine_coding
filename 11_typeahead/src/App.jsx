import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typeahead from "./components/Typeahead";

function App() {
  const [count, setCount] = useState(0);

  const SuggistionsData = [
    "Apple",
    "Banana",
    "Mango",
    "Grapes",
    "Watermelon",
    "Blueberry",
    "Pineapple",
  ];
  return (
    <>
      <h1>TypeAhead Example</h1>
      <Typeahead  SuggistionsData={SuggistionsData}/>
    </>
  );
}

export default App;
