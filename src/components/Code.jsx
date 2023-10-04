import React, { useContext } from "react";
import Editor from "./Editor";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { DataContext } from "../context/DataProvider";
const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <>
      <div className="flex bg-slate-900">
        <Editor
          icon={AiFillHtml5}
          title={"html"}
          color={"#EC5800"}
          value={html}
          onChange={setHtml}
        />
        <Editor
          icon={BiLogoCss3}
          title={"css"}
          color={"#0096FF"}
          value={css}
          onChange={setCss}
        />
        <Editor
          icon={BiLogoJavascript}
          title={"js"}
          color={"#FFC000"}
          value={js}
          onChange={setJs}
        />
      </div>
    </>
  );
};

export default Code;
