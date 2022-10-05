import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = ({
  navTitle,
  handleSubmit,
  onSearchChange,
  placeholderTitle,
}) => {
  return (
    <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <div>
          <h2 className="text-[52px] text-indigo-50-600 font-serif">
            <Link to={"/"}>{navTitle}</Link>
          </h2>
        </div>
        <div className="relative mt-1 items-center rounded-md ">
          <SearchInput
            handleSubmit={handleSubmit}
            search={onSearchChange}
            placeholder={placeholderTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
