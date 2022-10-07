import React, {useState} from 'react';
import {Routes, Route, Link, BrowserRouter } from 'react-router-dom' ;
import NavBar from './NavBar';
import PostsContainer from './PostsContainer';
import Login from './Login';
import Signup from './Signup';
import { GlobalProvider } from '../context/GlobalState';
import NewPost from './NewPost'

const App = () => {
  return (
  <GlobalProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/" element={<PostsContainer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </GlobalProvider>
)}

export default App;