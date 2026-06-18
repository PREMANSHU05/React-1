import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";
export default function Comments() {
  let [comments, setcomments] = useState([
    {
      username: "@sk",
      remarks: "great job",
      rating: 4,
    },
  ]);

  let addnewcomment = (comment) => {
    setcomments((currcomment) => [...currcomment, comment]);
    console.log("added new comment");
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(Rating = {comment.rating})</span>
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addnewcomment={addnewcomment} />
    </>
  );
}
