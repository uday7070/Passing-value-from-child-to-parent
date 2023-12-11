import React from "react";

const Child = (props) => {
  let x = 5;

  return (
    <div>
      <button onClick={() => props.handler(x)}>child val</button>
    </div>
  );
};

export default Child;
