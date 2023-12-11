import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [child, setChild] = useState("6");

  const handler = (val) => {
    setChild(val);
  };
  return (
    <div>
      <Child handler={handler}></Child>
      <h1>{child}</h1>
    </div>
  );
};

export default Parent;
