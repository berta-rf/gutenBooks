import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Rating,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
    <Box>
      <Accordion className="reviewOutput">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className="outputReviewTitle">
              {props.books.bookTitle}
            </Typography>
            <Rating
              readOnly
              className="outputReviewRating"
              size="large"
              name="read-only"
              value={props.books.starRating}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="outputReviewDescription">
            {props.books.bookDescription}

            <Button
              className="deleteReview"
              variant="outlined"
              size="small"
              onClick={() => props.deleteReview(props.books.id)}
            >
              {<DeleteIcon />}
            </Button>
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
    </Box>
  );
}
