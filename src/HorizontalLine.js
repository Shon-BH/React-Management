import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "3px solid #aaa",
        lineHeight: "1.5em",
        margin: "20px 0 30px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 1px" }}></span>
    </div>
  );
};

export default HorizonLine;