import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { verifyUser, error2 } = useContext(GlobalContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const userInput = {
      username,
      password,
    }; 
    console.log('This is the userInput ', userInput);
    const verify = await verifyUser(userInput);
    console.log('verify: ', verify);
    // console.log('error2 from global state in login.js', error2)
    if (verify) routeChange();
    else {
      alert("Wrong username or password");
    }
  };

  return(
    <div class="container">
      <form class="row g-3" onSubmit={onSubmit}>
        <div class="col-md-6">
          <label class="form-label">
            Username
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="inputEmail4"></input>
        </div>
        <div class="col-md-6">
          <label  class="form-label">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="inputPassword4"></input>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  )
};

export default Login;
