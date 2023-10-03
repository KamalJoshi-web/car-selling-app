import React from "react";

const ErrorMsg = ({ msg }) => {
  return (
    <div className=" flex h-screen justify-center items-center flex-col">
      <h1 className=" text-2xl text-purple-400 text-center font-extrabold">
        Oops! Failed To Load Data
      </h1>
      <h2 className=" text-xl text-center text-red-300 font-bold">{msg}</h2>
    </div>
  );
};

export default ErrorMsg;
