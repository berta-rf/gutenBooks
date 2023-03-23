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
  InputLabel,
  Tooltip,
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
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography className="outputReviewTitle">
              {props.books.bookTitle}
            </Typography>
            <Typography className="brackets">(</Typography>
            <Rating
              readOnly
              className="outputReviewRating"
              size="large"
              name="read-only"
              value={props.books.starRating}
            />
            <Typography className="brackets">)</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className="outputReviewDescription">
              {props.books.bookDescription}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <InputLabel className="socialLabel">
                Share this review:
              </InputLabel>
              {/*----Sharing icons----- */}
              <Box sx={{ display: "flex" }}>
                <Tooltip title="Facebook">
                  <FacebookMessengerShareButton
                    url={"https://www.facebook.com/"}
                    quote={"Check out my latest review"}
                    hashtag="#gutenbookreview"
                  >
                    <FacebookIcon className="socialIcons" />
                  </FacebookMessengerShareButton>
                </Tooltip>
                <Tooltip title="Twitter">
                  <TwitterShareButton
                    url={"https://twitter.com/"}
                    title={"GutenBooks"}
                    hashtag="#gutebnbookreview"
                  >
                    <TwitterIcon className="socialIcons" />
                  </TwitterShareButton>
                </Tooltip>
                <Tooltip title="Whatsapp">
                  <WhatsappShareButton url={"https://web.whatsapp.com/"}>
                    <WhatsappIcon className="socialIcons" />
                  </WhatsappShareButton>
                </Tooltip>
                <Tooltip title="Mail">
                  <EmailShareButton>
                    <EmailIcon className="socialIcons" />
                  </EmailShareButton>
                </Tooltip>
              </Box>
            </Box>
            {/* ---Delete Button---*/}
            <Tooltip title="Remove Review">
              <Button
                className="deleteReview"
                variant="filled"
                type="submit"
                size="small"
                onClick={() => props.deleteReview(props.books.id)}
              >
                {<DeleteIcon />}
              </Button>
            </Tooltip>
          </Box>
          {/* ---------------*/}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
