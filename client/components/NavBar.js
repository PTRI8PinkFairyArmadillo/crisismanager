import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Logout from './Logout';
import Username from './Username';

const NavBar = () => (
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Crisis Manager
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              Log In
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/logout" onClick={(e) => Logout}>
              Log out
            </Link>
          </li>
        </ul>

        <div class="m-2">{<Username />}</div>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default NavBar;
