/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-indigo-900 fixed overflow-hidden h-[100vh] w-[100vw]">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div style={{ zIndex: 10, position: "fixed", top: "50%", left: "65%" }}>
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1
            className="font-extrabold text-5xl text-center text-white leading-tight mt-4"
            style={{ color: "white", fontSize: "2rem" }}
          >
            You are all alone here
          </h1>
          <p
            className="font-extrabold text-8xl my-44 text-white animate-bounce"
            style={{
              color: "white",
              fontSize: "3rem",
              transform: "animate-bounce",
              transition: "transform 0.3s",
            }}
          >
            404
          </p>
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
