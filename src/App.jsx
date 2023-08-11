import React, { useState, useEffect } from "react";
import { fetchAllPost } from "./api";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import Home from "./components/Home";
import AccountForm from "./components/AccountForm";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );

  useEffect(() => {
    const getAllPost = async () => {
      const posts = await fetchAllPost();
      setPosts(posts);
    };
    getAllPost();
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

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
          <Link className="item" to="/account/login">
            Login
          </Link>
          <Link className="item" to="/account/register">
            Sign up
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route
          path="/account/:action"
          element={<AccountForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
};

export default App;
