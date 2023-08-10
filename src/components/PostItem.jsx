import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({ post }) => {
  return (
    <div className="ui card">
      <div className="centered aligned header">{post.location}</div>
      <div className="centered aligned description">
        <p>{post.description}</p>
        <div className="centered aligned header">
          <Link to="*">View Location</Link>
        </div>
        <button className="negative ui button right floated">Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
