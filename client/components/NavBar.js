import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Routes, Route, Link, useNavigate } from 'react-router-dom' ;

const NavBar = () => {
  const [keyword, setKeyword] = useState('');
  const { searchPosts } = useContext(GlobalContext); 



  const onSubmit = e => {
    e.preventDefault();
    // what does this do exactly?
    // donation should take value of checkbox
    // console.log('what is checkbox value', e.target.donationCheckbox.value);
    // const donation = e.target.donationCheckbox.value ? true : false;
    const searchTerm = {
      keyword
    }
    console.log(searchTerm);
    searchPosts(searchTerm);
    routeChange();
  }
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Crisis Manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/login">Log In</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/signup">Sign Up</Link>
          </li>
      </ul>



      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setKeyword(e.target.value)}></input>
        <button class="btn btn-outline-success" type="submit" onClick={onSubmit}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
  };

export default NavBar;