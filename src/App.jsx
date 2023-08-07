import React, { useState, useEffect } from "react";
import { fetchAllPost } from "./api";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const posts = await fetchAllPost();
      setPosts(posts);
    };
    getAllPost();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
