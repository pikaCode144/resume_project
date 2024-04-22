import React, { useRef } from 'react';
import ReactMde from "react-mde";
// import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

// const converter = new Showdown.Converter({
//   tables: true,
//   simplifiedAutoLink: true,
//   strikethrough: true,
//   tasklists: true
// });

const RichTextEditor = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default RichTextEditor;
