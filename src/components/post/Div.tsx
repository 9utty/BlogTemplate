import React from "react";
import Spacer from "./Spacer";

const Div = () => {
  return (
    <div>
      <Spacer />
      <div
        style={{ width: "100%", height: "2px", backgroundColor: "#999" }}
      ></div>
      <Spacer />
    </div>
  );
};

export default Div;
