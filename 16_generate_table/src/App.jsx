import { useState } from "react";
import "./App.css";

export default function App() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let counter = 1;
    const data = [];

    for (let i = 0; i < rows; i++) {
      console.log(i);
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(counter++);
        console.log("sdfs", row);
      }
      data.push(row);
    }
    setTableData(data);

    console.log("form submitted");
  };

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Rows:</label>
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Columns:</label>
            <input
              type="number"
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        <table>
          <tbody>
            {tableData.length > 0 &&
              tableData.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, ind) => (
                    <td key={ind}>{cell}</td>
                  ))}
                </tr>
              )) }
          </tbody>
        </table>
      </div>
    </div>
  );
}
