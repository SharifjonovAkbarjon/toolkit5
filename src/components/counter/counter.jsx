import React, { memo } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  return (
    <div className="container mx-auto">
    </div>
  );
};

export default memo(Counter);
