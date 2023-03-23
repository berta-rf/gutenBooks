import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import axios from "axios";
import { useState } from "react";
import "../assets/styles/modal.scss";
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
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BookModal(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("");
  const handleOpen = () => {
    setOpen(true);
    // console.log('Calling descript', props.title);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.title}&key=AIzaSyDxKZhFCI9K0aCExPM-D-bIDvZ0UAmylow`
      )
      .then((res) => {
        let data = res.data.items[0].volumeInfo.description;
        // console.log(data);;
        // .catch(err => console.log(err))
        setDescription(data);
        // console.log("Description" + description)
      });
  };
  return (
    <div>
      <Button className="bookCardButton" color="success" onClick={handleOpen}>
        Description
      </Button>
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
        <Box className="modalBox" sx={style}>
          <Typography
            id="modalTitle"
            className="modalInfo"
            variant="h5"
            component="h1"
          >
            Title:
          </Typography>
          <p className="modalText">{props.title}</p>
          {/* <Typography id='modalTitle' variant="h5" component="h2">
              Author: {props.author}
            </Typography> */}
          <Typography
            id="modalLanguage"
            className="modalInfo"
            variant="h5"
            component="h1"
          >
            Language:
          </Typography>
          <p className="modalText">{props.language}</p>
          <Typography
            id="modalDescription"
            className="modalInfo"
            variant="h5"
            component="h1"
          >
            Description:
          </Typography>
          <p className="modalText limit">{description}</p>
          <Typography
            id="modalSubjects"
            className="modalInfo"
            variant="h5"
            component="h1"
          >
            Genre:
          </Typography>
          <div className="modalGenre">
            {props.subjects.map((subject, index) => (
              <button className="subjectText" key={index}>
                {subject}
              </button>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default BookModal;
