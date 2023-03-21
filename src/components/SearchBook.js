import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//MUI
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormGroup } from "@mui/material";

const SearchBook = () => {

  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState({
    param: "author",
    query: "",
  });

  // handles change of param (by author/title to by topic)
  const handleChange = (event) => {
    setSearchResults({ ...searchResults, param: event.target.value });
  };

  // handles search input and navigates to url/param/query
  const handleSearch = () => {
    navigate(`${searchResults.param}/${searchResults.query}`)
  }

  return (
    <div>
      <FormControl id="searchForm">
        <FormGroup sx={{ flexDirection: "row" }}>
          <TextField
            id="search-bar"
            className="text"
            type="search"
            label="Search"
            value={searchResults.query}
            onInput={(e) => {
              setSearchResults({ ...searchResults, query: e.target.value });
            }}
            variant="filled"
            sx={{ borderRadius: "" }}
          />
          <Select
            id="select-param"
            value={searchResults.param}
            onChange={handleChange}
            sx={{ backgroundColor: "#fff", borderRadius: "0px" }}
          >
            <MenuItem value={"author"}>by title / author</MenuItem>
            <MenuItem value={"topic"}>by topic</MenuItem>
          </Select>
          <IconButton
            type="submit"
            aria-label="search"
            onClick={handleSearch}
            sx={{ border: "solid 1px", borderRadius: "0 1px" }}
          >
            <SearchIcon />
          </IconButton>
        </FormGroup>
      </FormControl>
    </div>
  );
};
export default SearchBook;
