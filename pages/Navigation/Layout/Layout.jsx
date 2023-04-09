import React, { useState } from "react";
import Footer from "../../../HOC/Footer/Footer";
import TopBar from "../TopBar/TopBar";
import { Inter, Raleway, Fasthand } from "next/font/google";
import { Fade } from "react-awesome-reveal";
const inters = Raleway({ subsets: ["latin"], weight: ["400"], preload: true });
import ScrollTo from "react-scroll-into-view";
import Router from "next/router";

const inter = Fasthand({ subsets: ["latin"], weight: ["400"], preload: true });
function Layout({ children }) {
  const [DarkTheme, setDarkTheme] = useState(false);
  const Theme = () => {
    setDarkTheme(!DarkTheme);
    //   router.push({
    //     pathname: "/",
    //     query: { DarkTheme: DarkTheme },
    //   });
  };
  const [show, setShow] = useState(false);
  const Reloads = () => {
    setTimeout(() => {
      Router.reload();
    }, 100);
  };
  return (
    <div>
      <TopBar
        DarkTheme={DarkTheme}
        Theme={Theme}
        show={show}
        setShow={setShow}
        Reloads={Reloads}
      />
      <div
        className={`${
          DarkTheme
            ? "bg-[#171C28] text-white  md:text-[#ACACAC]"
            : "bg-[#ECF9FF] text-[black]"
        } ${
          inters.className
        } relative  transition-all ease-in-out duration-300 delay-100`}
      >
        <div>{children}</div>
      </div>

      <div
        className={`  ${
          DarkTheme ? "bg-[#171C28]  text-white" : " bg-[#171C28] text-white  "
        }  `}
      >
        <div
          className={` ${DarkTheme && "border-t w-[96%] mx-auto bg-gray-100"}`}
        ></div>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Layout;
