import { Grid } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const { useBreakpoint } = Grid;

/** #, ##, ### 처럼 사용하기 */
const H1 = ({ children }: Props) => {
  const screens = useBreakpoint();
  return (
    <div
      style={{
        fontSize: screens.md ? "2rem" : "30px",
        fontFamily: "dunggeunmo-bold",
      }}
    >
      {children}
    </div>
  );
};

export default H1;
