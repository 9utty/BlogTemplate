import { Grid } from "antd";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const TextTag = ({ children }: Props) => {
  return (
    <div
      style={{
        fontSize: "1.3rem",
        fontFamily: "dunggeunmo",
        marginTop: "30px",
        marginLeft: "5px",
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </div>
  );
};
export default TextTag;
