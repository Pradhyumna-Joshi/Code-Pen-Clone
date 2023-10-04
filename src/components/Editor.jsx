import React, { useContext, useState } from "react";
import { FiMinimize2 } from "react-icons/fi";

import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { DataContext } from "../context/DataProvider";

const Editor = (props) => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    props.onChange(value);
  };

  const handleMinimize = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={`${open ? "flex-1" : "flex-[0.2]"} p-2 bg-slate-900`}>
      <div className="flex items-center justify-between bg-slate-900 ">
        <div className="flex items-center bg-slate-800 p-2 rounded-t-xl">
          {<props.icon color={props.color} size={20} />}
          <h1 className="text-white font-semibold pl-1">.{props.title}</h1>
        </div>
        <FiMinimize2 className="mr-2" onClick={handleMinimize} color="gray" />
      </div>
      {/* editor  */}

      <ControlledEditor
        value={props.value}
        onBeforeChange={handleChange}
        className="controlled-editor"
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
