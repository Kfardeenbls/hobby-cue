import React from "react";

const SearchBar = ({ title, label }) => {
  return (
    <div
      className="search-bar d-flex"
      style={{ flexDirection: "column", gap: "20px", minWidth: "20px" }}
    >
      <span className="title">{title}</span>
      <form className="d-flex flex-1" role="search">
        <input
          className="form-control"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success"
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: "#8064A2",
            color: "#f8f9fa",
          }}
          type="submit"
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
