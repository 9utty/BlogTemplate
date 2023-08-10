import React from "react";
import { Grid } from "antd";
import Spacer from "./Spacer";

type Props = {
  children: React.ReactNode;
};
/** #, ##, ### 처럼 사용하기 */
const H2 = ({ children }: Props) => {
  return (
    <div
      style={{
        fontSize: "1.8rem",
        fontFamily: "dunggeunmo-bold",
      }}
    >
      <Spacer />
      <Spacer />
      <Spacer />
      {children}
      <Spacer />
    </div>
  );
};

export default H2;
