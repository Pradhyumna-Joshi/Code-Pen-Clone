import React from "react";
import { AiOutlineCodepen } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div className="pl-2 bg-slate-900 h-[10vh] flex items-center">
        <AiOutlineCodepen className="flex-2" size={42} color={"white"} />
        <div className="flex-1">
          <h1 className="text-slate-500 bg-clip-text text-transparent text-2xl bg-gradient-to-r from-purple-400 via-purple-800">
            .code
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
