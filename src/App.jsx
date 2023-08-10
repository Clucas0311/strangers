import React, { useState, useEffect } from "react";
import { fetchAllPost } from "./api";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import Home from "./components/Home";

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
    <div className="container">
      <nav className="ui secondary menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/posts">
          Posts
        </Link>
        <div className="right menu">
          <Link className="item" to="*">
            Login
          </Link>
          <Link className="item" to="*">
            Sign up
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
