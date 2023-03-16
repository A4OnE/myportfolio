import React, { useState } from "react";
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
            ? "bg-[#171C28] text-white md:text-orange-500"
            : "bg-[#ECF9FF] text-black"
        } transition-all ease-in-out duration-300 delay-100`}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
