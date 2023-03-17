import React, {useState} from 'react';
import axios  from 'axios';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl/FormControl';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



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

        if (searchResults.param === "author") {
            axios.get(authorURL + searchResults.query)
        } else if (searchResults.param === "topic")
            axios.get(topicURL + searchResults.query)

        .then(data => console.log(data.data))
        .catch(error => console.log(error));
        
    };


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

        <DefaultHomepage props={searchResults}/>

    </>)}



export default SearchBook;