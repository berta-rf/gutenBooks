
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Rating,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// import EditIcon from '@mui/icons-material/Edit';

// ----------------------------------------
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookMessengerShareButton,
  EmailShareButton,
  EmailIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function ReviewItem(props) {
  return (
    <Accordion className="reviewOutput">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="outputReviewTitle">
          {props.books.bookTitle}
        </Typography>
        <Rating
          className="outputReviewRating"
          name="read-only"
          value={props.books.starRating}
          sx={{ ml: 5 }}
          readOnly
        />
        <Button
          className="deleteReview"
          variant="outlined"
          size="small"
          sx={{ ml: 120 }}
          startIcon={<DeleteIcon />}
          onClick={() => props.deleteReview(props.books.id)}
        >
          Delete
        </Button>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="outputReviewDescription">
          {props.books.bookDescription}
          {/*----Sharing icons----- */}
          <div className="sharingIcons">
            <FacebookMessengerShareButton
              url={"https://www.facebook.com/"}
              quote={"Check out my latest review"}
              hashtag="#gutenbookreview"
            >
              <FacebookIcon size={30} />
            </FacebookMessengerShareButton>
            <TwitterShareButton
              url={"https://twitter.com/"}
              title={"GutenBooks"}
              hashtag="#gutebnbookreview"
            >
              <TwitterIcon size={30} />
            </TwitterShareButton>
            <EmailShareButton>
              <EmailIcon size={30} />
            </EmailShareButton>
            <WhatsappShareButton url={"https://web.whatsapp.com/"}>
              <WhatsappIcon size={30} />
            </WhatsappShareButton>
          </div>
          {/* ---------------*/}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
