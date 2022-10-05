import React from "react";

const SearchInput = ({handleSubmit,search}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="search"
          onChange={(e) => search(e.target.value)}
          placeholder="Search For Image"
        />
      </form>
    </div>
  );
};

export default SearchInput;
