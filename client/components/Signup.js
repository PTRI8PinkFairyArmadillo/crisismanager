import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Signup = () => (
  <div class="container">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputUsername" class="form-label">
          Username
        </label>
        <input type="username" class="form-control" id="inputUsername"></input>
      </div>
      <div class="col-md-6">
        <label for="inputPassword" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword"></input>
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
);

export default Signup;
