import React, { useEffect, useState } from "react";

//Check if any books in storage
//if
const AddToBookshelf = () => {
  const [id, setId] = useState([]);

  const addBook = (id) => {};

  return (
    <Box component="span" role="presentation">
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={handleClick}
        sx={{
          position: "relative",
          bottom: 650,
          left: 275,
          zIndex: 1,
        }}
      >
        <BookmarkAddIcon />
      </Fab>
    </Box>
  );
};
