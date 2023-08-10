import CustomModal from "@/components/common/customModal";
import Div from "@/components/post/Div";
import H2 from "@/components/post/H2";
import TabTag from "@/components/post/TabTag";
import { Row } from "antd";
import Image from "next/image";
import React from "react";
import { ScrollView } from "react95";
/** 내 프로필 페이지 */
export default function Profile() {
  return (
    <CustomModal modalName="프로필" width="60vw" height="65vh" left="15%">
      <div style={{ height: "100%" }}>내블로그</div>
    </CustomModal>
  );
}
