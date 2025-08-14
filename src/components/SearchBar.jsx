import React from "react";

const SearchBar = () => {
  return (
    <div className="mt-4 flex font-mono justify-center">
      <div className="border rounded-md ">
        <input
          type="text"
          className="focus:outline-none  focus:border-green-600 border-r-white rounded-md px-2 text-[#FFFFF0]"
        />
        <button className="rounded-sm p-2 cursor-pointer bg-[#202a36] text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
