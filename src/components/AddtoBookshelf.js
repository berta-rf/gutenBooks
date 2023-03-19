import React, { useState, useContext, useEffect } from "react";
import BookContext from "../context/books";

//mui
import { IconButton, Tooltip } from "@mui/material";

//mui icons
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const AddToBookshelf = () => {
  return (
    <Tooltip title="Add to Bookshelf">
      <IconButton>
        <BookmarkAddIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToBookshelf;
