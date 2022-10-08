import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const { addUser } = useContext(GlobalContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path)
  }

  const onSubmit = e => {
    e.preventDefault();
    // what does this do exactly?
    
    const newUser = {
      username,
      password,
      email,
      name
    }
      console.log(newUser);
      
      addUser(newUser);
      routeChange();
  }

  return (
    <div class="container">
      <form class="row g-3" onSubmit={onSubmit}>
        <div class="col-md-6">
          <label for="inputUsername" class="form-label">
            Username
          </label>
          <input type="username" value={username} onChange={(e) => setUsername(e.target.value)}class="form-control" id="inputUsername"></input>
        </div>
        <div class="col-md-6">
          <label for="inputPassword" class="form-label">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}class="form-control" id="inputPassword"></input>
        </div>
        <div class="col-12">
          <label for="inputFullName" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputFullName"
            placeholder="Jane Doe"
            value={name} onChange={(e) => setName(e.target.value)}
          ></input>
          <div class="input-group">
          <div class="col-md-6">
          <label for="inputEmailAddress" class="form-label">
            Email Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmailAddress"
            placeholder="jdoe@example.com"
            value={email} onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <span class="input-group-addon"></span>
        <div class="col-md-6">
          <label for="inputEmailAddress" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control"
            id="inputEmailAddress"
            placeholder="jdoe@example.com"
          ></input>
        </div>
        </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          ></input>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup;
