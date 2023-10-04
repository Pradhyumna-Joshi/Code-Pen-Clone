import React, { useContext, useState, useEffect, useDebugValue } from "react";
import { DataContext } from "../context/DataProvider";

const Output = () => {
  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState();
  const code = `
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>

`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(code);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className="h-screen">
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </div>
  );
};

export default Output;
