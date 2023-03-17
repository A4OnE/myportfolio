import React, { useState } from "react";
import Footer from "../../../HOC/Footer/Footer";
import TopBar from "../TopBar/TopBar";

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
        }  relative -z-10 transition-all ease-in-out duration-300 delay-100`}
      >
        {children}
      </div>

      <div
        className={`${
          DarkTheme ? "bg-[#1F2937]  text-white" : " bg-[#111827] text-white  "
        } relative -z-10 `}
      >
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Layout;
