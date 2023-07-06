import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchField.trim()) {
    navigate(`/search/${searchField}`)
    } else navigate("/");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-group">
          <input
            type="text"
            id="search-field"
            placeholder="Enter product name ..."
            className="form-control"
            onChange={(e) => setSearchField(e.target.value.toLocaleLowerCase())}
          />
          <div className="input-group-append">
            <button className="btn" id="search_btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
