import React from "react";
//mui
import { IconButton } from "@mui/material";

//mui icons
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const AddToBookshelf = () => {
  // const [addedBooks, setAddedBook] = useState([]);

  // const handleAddBook = () => {};

  return (
    <IconButton>
      <BookmarkAddIcon />
    </IconButton>
  );
};

  /* <Fab
    color="primary"
    aria-label="add"
    size="small"
    onClick={handleAddBook}
    sx={{
      position: "relative",
      bottom: 670,
      left: 280,
      zIndex: 1,
    }}</Fab>
  > */


export default AddToBookshelf;
