import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (comment !== "" && comment.length < 5) {
      setCommentError(true);
    } else {
      setCommentError(false);
    }
  }, [comment, setComment]);

  return (
    <div id="main">
      <form>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
          <span className="rating">{rating}</span>
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {commentError === true ? (
            <p style={{ color: "red" }} className="comment-error">
              Comment must be atleast 5 characters.
            </p>
          ) : (
            ""
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
