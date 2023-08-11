import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { registerUser, loginUser } from "../api";

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { action } = useParams();

  const title = action === "login" ? "Login In " : "Sign Up";

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const authFn = action === "register" ? registerUser : loginUser;
    const data = await authFn(username, password);
    console.log("data", data.data.token);
    setToken(data.data.token);
  };

  return (
    <form onSubmit={onSubmitHandler} className="ui form">
      <h1>{title}</h1>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          minLength="8"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button className="ui button" type="submit">
        {title}
      </button>
    </form>
  );
};

export default AccountForm;
