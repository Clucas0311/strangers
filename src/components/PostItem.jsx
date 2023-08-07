import React from "react";

const PostItem = ({ post }) => {
  return (
    <div>
      <h1>{post.location}</h1>
    </div>
  );
};

export default PostItem;
