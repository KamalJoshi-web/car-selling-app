import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, baseUrl }) => {
  const pageArr = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className=" overflow-x-auto overflow-auto flex mx-28 py-1 ">
      {pageArr.map((pages) => (
        <button key={pages} className=" mx-2">
          <Link
            to={`${baseUrl}/${pages}`}
            className={`relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md `}
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-2 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">{pages}</span>
            </span>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
