import React from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}

const TextColor = ({ color, children }: Props) => {
  return (
    <span style={{ color: color, fontFamily: "dunggeunmo-bold" }}>
      {children}
    </span>
  );
};

export default TextColor;
