import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchCars = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      toast.error("Please enter car name to proceed forward ");
    } else if (input === "bmw" || input === "Bmw") {
      const carName = input.toUpperCase();
      navigate(`/searched/${carName}`);
    } else if (input === "gmc" || input === "Gmc") {
      const carName = input.toUpperCase();
      navigate(`/searched/${carName}`);
    } else {
      const initialName = input.toLowerCase();
      const carName =
        initialName.charAt(0).toUpperCase() + initialName.slice(1);
      navigate(`/searched/${carName}`);
    }
  };

  return (
    <div className="mb-1 mx-4  ">
      <form
        onSubmit={handleSubmit}
        className="relative  flex w-full flex-wrap items-stretch bg-white bg-opacity-50 
      backdrop-blur-xl rounded drop-shadow-lg my-2 py-4 px-4  "
      >
        <input
          type="input"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid  border-slate-400
           bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 
           outline-none transition duration-200 ease-in-out focus:z-[3] rounded-md focus:border-primary focus:text-neutral-700 
           focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] "
          placeholder="Search....."
          onChange={(e) => setInput(e.target.value)}
        />

        {/* <!--Search button--> */}
        <button
          className=" absolute z-[2] rounded-r  right-1 top-4  
          px-6 py-2  transition duration-150 ease-in-out  "
          type="submit"
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>
      {/* Home Button */}
      <button
        className=" bg-purple-500 p-1 rounded-md  hover:bg-purple-400 text-white m-auto mb-0"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default SearchCars;
