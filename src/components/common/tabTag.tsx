import { Grid } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const { useBreakpoint } = Grid;
/** {"String"} 문자열만 쓰기 */
const TabTag = ({ children }: Props) => {
  const screens = useBreakpoint();
  return (
    <div
      style={{
        marginLeft: "10px",
        fontFamily: "dunggeunmo",
        fontSize: screens.md ? "1rem" : "17px",
        marginTop: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default TabTag;
