import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import Container from '@mui/material/Container';
import axios from "axios";


const Reader = () => {

    // And your own state logic to persist state
    const [location, setLocation] = useState(null)
    const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
    }

    const baseURL = "/.netlify/functions/epub-downloader";

    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setBook(response.data.data);
        });
    }, []);

    if (!book) return null;

    return (
        
        <Container>
            <div style={{ height: '100vh' }}>
            <ReactReader
                location={location}
                locationChanged={locationChanged}
                epubInitOptions={
                    {encoding: 'base64'}
                }
                url={book}
            />
            </div>
        </Container>
    );
}


export default Reader;