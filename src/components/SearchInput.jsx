import React from "react";

const SearchInput = ({ handleSubmit, search, placeholder }) => {
  return (
    <div className="md:flex md:justify-center mb-6 ">
      <form onSubmit={handleSubmit}>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder={`Search for ${placeholder}`}
            type={"text"}
            name="search"
            data-testid="searchField"
            onChange={(e) => search(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchInput;
