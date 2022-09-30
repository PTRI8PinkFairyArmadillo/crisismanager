import React from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import NavBar from './NavBar';
import PostsContainer from './PostsContainer';
import Footer from './Footer';

const App = () => (
  <div>
    <NavBar />
    <PostsContainer />
    <Footer />
  </div>
)

export default App;