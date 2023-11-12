import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="h-16 w-full px-5 flex gap-20 items-center text-gray-600 py-4 border-b-2 border-gray-800">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="relative flex h-full">
        <input
          type="text"
          placeholder="Buscar"
          className="px-5 pr-10 w-[450px] h-full outline-none bg-gray-100 rounded-md"
        />
        <IoIosSearch className="absolute right-2 top-2 w-5 h-5 cursor-pointer active:scale-90 duration-200" />
      </div>
    </div>
  );
};

export default SearchBar;
