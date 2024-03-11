import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  console.log(explorer);

  if (explorer.isFolder) {
    return (
      <div style={{ margin: "20px" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂{explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗃{explorer.name}</span>;
  }
};

export default Folder;
