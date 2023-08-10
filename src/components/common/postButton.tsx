import { Grid } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  Header: string;
  Date: string;
  Tag: string[];
  filePath: string;
}

const { useBreakpoint } = Grid;

const PostButton = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const screens = useBreakpoint();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openModal = () => {
    router.push(props.filePath);
  };

  return (
    <button
      style={{
        width: "100%",
        height: "50px",
        position: "relative",
        transform: isHovered ? "scale(0.98)" : "",
        transition: "transform 0.2s",
      }}
      className={isHovered ? "scaled" : ""}
      onClick={openModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          backgroundColor: isHovered ? "#0027a9" : "black",
          opacity: "0.1",
          height: screens.md ? "80px" : "100px",
          borderRadius: "10px",
        }}
      ></span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          top: screens.md ? "-60px" : "-80px",
        }}
      >
        <Image
          src="https://user-images.githubusercontent.com/86397600/236504963-ae3b7e09-7aba-476b-b51b-df402aa5567e.png"
          width={30}
          height={30}
          alt="postButton"
        />
        <span
          style={{
            marginLeft: "10px",
            fontFamily: "dunggeunmo-bold",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {props.Header}
          <span
            style={{
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
              top: "-50px",
            }}
          >
            {props.Date}
          </span>
        </span>
      </span>
    </button>
  );
};

export default PostButton;
