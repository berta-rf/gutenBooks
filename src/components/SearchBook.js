import React, { useContext } from "react";
import BookContext from "../context/books";
import axios from "axios";

//default books
// import defaultBooks from "../assets/data/defaultBooks.json";

//MUI
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormGroup } from "@mui/material";

const SearchBook = () => {
  // useContext test

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

/* const {
    setSearchResults,
    searchResults,
    results,
    handleChange,
    handleSearch,
  } = useContext(BookContext);

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
            value={handleSearch}
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
  ); export default SearchBook;*/

//mine
/*   
  const authorURL = "https://gutendex.com/books?search=";
  const topicURL = "https://gutendex.com/books?topic=";

  const [searchResults, setSearchResults] = useState({
    param: "author",
    query: "",
  }); 
  
  const handleSearch = () => {
    let url;
    if (searchResults.param === "author") {
      url = authorURL + searchResults.query;
    } else if (searchResults.param === "topic") {
      url = topicURL + searchResults.query;
    }
    axios
      .get(url)
      .then((data) => setResults(data.data.results))
      .catch((error) => console.log(error));
  };

  const { results, setResults } = useState(defaultBooks); 
  // console.log(results)

  
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
*/

//Berta
/* import React, {useState} from 'react';
import axios  from 'axios';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl/FormControl';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import defaultBooks from '../assets/data/defaultBooks.json';

import Homepage from './Homepage';

const SearchBook = () => {
  
  const authorURL = "https://gutendex.com/books?search=";
  const topicURL = "https://gutendex.com/books?topic=";
  
  
    const [searchResults, setSearchResults] = useState ({
      param: 'author',
      query: '',
    })
    
    
    const handleChange = (event) => {
      
      setSearchResults({...searchResults, param: event.target.value});
    };
    
    const handleSearch = () => {
      let url;
      if (searchResults.param === "author") {
        url = authorURL + searchResults.query;
      } else if (searchResults.param === "topic") {
        url = topicURL + searchResults.query;
      }
      axios.get(url)
      .then(data => setResults(data.data.results))
      .catch(error => console.log(error));
      
    };
    
    const [results, setResults] = useState(defaultBooks);
    // console.log(results)
    
    return(<>
      
      <FormControl id="searchForm">
      
      <Select
      id="select-param"
      value={searchResults.param}
      onChange={handleChange}>
      <MenuItem value={"author"}>Search by title / author</MenuItem>
      <MenuItem value={"topic"}>Search by topic</MenuItem>
      </Select>
      
      <TextField
      
      id="search-bar"
      className="text"
      value={searchResults.query}
      onInput={(e) => {setSearchResults({...searchResults, query: e.target.value});
    }}
    placeholder=""
    
    />
    <IconButton type="submit" aria-label="search"
    onClick={handleSearch}
    >
    <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
    </FormControl>
    
    </>)}
    
    
    
export default SearchBook; */

/* 
useContext Test
<div>
  {count}
  <button onClick={incrementCount}> click me!</button>
</div> */
