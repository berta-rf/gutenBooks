import React, { useState } from 'react';
import { ReactReader } from 'react-reader';
import Container from '@mui/material/Container';


const Reader = () => {

    fetch("/.netlify/functions/epub-downloader")
    .then(response.data)


    // And your own state logic to persist state
    const [location, setLocation] = useState(null)
    const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
    }

    return (

        <Container>
            <div style={{ height: '100vh' }}>
            <ReactReader
                location={location}
                locationChanged={locationChanged}
                url="https://www.gutenberg.org/ebooks/2016.epub3.images"
            />
            </div>
        </Container>
    )
}


export default Reader;