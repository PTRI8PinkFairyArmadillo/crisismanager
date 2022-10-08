import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import PostsContainer from './PostsContainer';
import Login from './Login';
import Signup from './Signup';
import { GlobalProvider } from '../context/GlobalState';
import NewPost from './NewPost';
import Logout from './Logout';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <CookiesProvider>
          <NavBar />
          <Routes>
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/" element={<PostsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
