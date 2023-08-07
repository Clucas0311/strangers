import React, { useState, useEffect } from "react";
import { fetchAllPost } from "./api";

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
    </div>
  );
};

export default App;
