import React from 'react';
import {Routes, Route, Link, BrowserRouter } from 'react-router-dom' ;
import NavBar from './NavBar';
import PostsContainer from './PostsContainer';
import Login from './Login';

const App = () => {
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<PostsContainer />} />
    <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)}

export default App;