import React, { useState } from "react";
import Footer from "../../../HOC/Footer/Footer";
import TopBar from "../TopBar/TopBar";
import { Inter, Raleway, Fasthand } from "next/font/google";

const inter = Raleway({ subsets: ["latin"], weight: ["400"], preload: true });
function Layout({ children }) {
  const [DarkTheme, setDarkTheme] = useState(false);
  const Theme = () => {
    setDarkTheme(!DarkTheme);
    //   router.push({
    //     pathname: "/",
    //     query: { DarkTheme: DarkTheme },
    //   });
  };

  return (
    <div>
      <TopBar DarkTheme={DarkTheme} Theme={Theme} />
      <div
        className={`${
          DarkTheme
            ? "bg-[#171C28] text-white  md:text-[#ACACAC]"
            : "bg-[#ECF9FF] text-[black]"
        } font-Raleway  relative  transition-all ease-in-out duration-300 delay-100`}
      >
        {children}
      </div>

      <div
        className={`  ${
          DarkTheme ? "bg-[#1F2937]  text-white" : " bg-[#111827] text-white  "
        } `}
      >
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Layout;
