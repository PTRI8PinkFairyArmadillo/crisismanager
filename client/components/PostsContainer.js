import React from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import Post from './Post';
import Footer from './Footer'

const PostsContainer = () => (
  <div>
    <Post />
    <Post />
    <Post />
    <Footer />
  </div>
);

export default PostsContainer