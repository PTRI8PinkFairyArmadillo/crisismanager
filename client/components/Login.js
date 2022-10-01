import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Login = () => (
  <div class="container">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4"></input>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4"></input>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  </div>
);
export default Login;