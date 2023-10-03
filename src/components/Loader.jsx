import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <ScaleLoader />
    </div>
  );
};

export default Loader;
