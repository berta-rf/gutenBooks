import React, { useContext } from "react";
import BookContext from "../context/books";

//MUI
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormGroup } from "@mui/material";

const SearchBook = () => {
  const { searchResults, setSearchResults, handleSearch, handleChange } =
    useContext(BookContext);

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
            <MenuItem value={"author"}>Search by title / author</MenuItem>
            <MenuItem value={"topic"}>Search by topic</MenuItem>
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
