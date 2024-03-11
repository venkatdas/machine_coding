import React, { useState } from "react";
import "./Accordian";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Accordian = ({ title, info }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <article
      className="question"
      style={{ cursor: "pointer" }}
      onClick={toggle}
    >
      <header>
        <h4>{title}</h4>
        <button className="btn ">
          {showDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {/* {exp1&&exp2} if exp1 =>true then it will return exp2 otherwise false */}
      {showDetails && <p>{info}</p>}
    </article>
  );
};

export default Accordian;
