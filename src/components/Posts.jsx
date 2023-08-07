import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return <PostItem key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
