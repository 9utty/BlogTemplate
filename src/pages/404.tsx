/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Grid } from "antd";
import Link from "next/link";
import React from "react";

const { useBreakpoint } = Grid;

const NotFound = () => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        backgroundColor: "indigo",
        position: "fixed",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        zIndex: 1000,
      }}
    >
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div
        style={{
          zIndex: 10,
          position: "fixed",
          top: screens.sm ? "50%" : "20%",
          left: screens.sm ? "65%" : "15%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "extrabold",
              fontFamily: "dunggeunmo-bold",
            }}
          >
            You are all alone here
          </h1>
          <span
            className="animate-bounce"
            style={{
              fontFamily: "dunggeunmo-bold",
              color: "white",
              fontSize: "3rem",
              fontWeight: "extrabold",
              transition: "transform 0.3s",
            }}
          >
            404
          </span>
        </div>
        <Link href="/">
          <h2
            className="font-extrabold text-5xl text-center text-white mt-4"
            style={{ color: "white", fontSize: "2rem" }}
          >
            Go home →
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
