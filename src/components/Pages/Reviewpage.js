import React, { useEffect, useState } from "react";
import ReviewForm from "../ReviewForm";
import ReviewItem from "../ReviewItem";

// get the local storage before the page loads so it can load with the storage
const getLocalItems = () => {
  let list = localStorage.getItem("review");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("review")));
  } else {
    return [];
  }
};

function Reviewpage() {

  // change page title
  let newPageTitle = `gutenBooks - My Reviews`
  document.title = newPageTitle;

  // empty array to "add" to with the new reviewites and render the local storage
  const [review, setReviews] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(review));
  }, [review]);

  const addReview = (bookTitle, bookDescription, starRating) => {
    // provides each review item with an id that incriments up, id helps to map through the array
    let id = 1;
    // if no reviews, assign the first one with 1 and there after add 1 to the id number
    if (review.length > 0) {
      id = review[0].id + 1;
    }
    // pulls the info from id and userinputs into an object
    let books = {
      id: id,
      bookTitle: bookTitle,
      bookDescription: bookDescription,
      starRating: starRating,
    };
    // uses spread operator to iterate over the array
    let newReview = [books, ...review];
    // console.log to ensure it showing as an array
    console.log(newReview);
    // assigns new array into the new state
    setReviews(newReview);
  };

  // removes review if the user doesn't want it there
  const deleteReview = (id) => {
    // filter through the reviews in book array, if it does not match the id then keep in the array
    let updatedReviews = [...review].filter((books) => books.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <ReviewForm addReview={addReview} />
      {/* goes through each array and displays using the review item format */}
      {review.map((books) => {
        return (
          // applies the functions to part we want to render
          <ReviewItem
            books={books}
            deleteReview={deleteReview}
            key={books.id}
          />
        );
      })}
    </div>
  );
}

export default Reviewpage;
