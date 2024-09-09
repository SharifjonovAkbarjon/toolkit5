import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, res } from "../../redux/counter-slase";
const Hero = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
 <div></div>
  );
};

export default Hero;
