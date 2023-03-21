import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import axios from 'axios'
import { useEffect, useState } from 'react'


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("")
  useEffect(
    () => {
      console.log('Calling descript', props.title)
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.title}&key=AIzaSyBW3TLScb7kRYv0kkDzkT_Zv5qUF8euQg8`)
        .then(res => {
          let data = (res.data.items[0].volumeInfo.description);
          console.log(data);;
          // .catch(err => console.log(err)) 
          setDescription(data)
          console.log("Description" + description)
        })
    }, []
  )

  return (
    <div>
      <Button onClick={handleOpen}>Description
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}
        >
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h5" component="h2">
              Title: {props.title}
            </Typography>
            <Typography id="spring-modal-title" variant="h5" component="h2">
              Author: {props.author}
            </Typography>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Language: {props.language}
            </Typography>
            <Typography>
              Description: {description}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Genre: {props.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </Typography>
          </Box>
        </Modal>
      </Button>
    </div>
  );
};

export default BookModal;
