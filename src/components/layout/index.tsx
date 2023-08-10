import React, { useState } from "react";
import {
  Bar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  return (
    <>
      <Bar
        style={{
          width: "100vw",
          paddingTop: "3px",
          height: "2.5rem",
          position: "fixed",
          bottom: 0,
          left: 0,
          paddingBottom: "5px",
        }}
      >
        <Toolbar>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{
                height: "2rem",
                width: "6rem",
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              <Image
                src={
                  "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                }
                alt="menuLogo"
                width={50}
                height={50}
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                  marginRight: "10px",
                }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "3.5rem",
                  width: "13rem",
                  zIndex: "100",
                }}
                onClick={() => setOpen(false)}
              >
                {/* <MenuListItem onClick={() => route.push("/")}>
                  <span role="img" aria-label="👨">
                    {" 👨 "}
                  </span>
                  <span>My Blog?</span>
                </MenuListItem> */}
                <MenuListItem onClick={() => route.push("/profile")}>
                  <span role="img" aria-label="👨‍💻">
                    {" 👨‍💻 "}
                  </span>
                  <span>Profile?</span>
                </MenuListItem>
                <MenuListItem onClick={() => route.push("/")}>
                  <span role="img" aria-label="🏠">
                    {" 🏠 "}
                  </span>
                  <span>Go Home</span>
                </MenuListItem>
                <MenuListItem
                  onClick={() => route.push("https://github.com/9utty")}
                >
                  <span role="img" aria-label="📁">
                    {" 📁 "}
                  </span>
                  <span>{" Github?"}</span>
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  <div>Logout?</div>
                </MenuListItem>
              </MenuList>
            )}
          </div>
          {/* <Search /> */}
        </Toolbar>
      </Bar>
    </>
  );
}
