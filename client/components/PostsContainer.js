import React from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import Post from './Post';

const PostsContainer = () => (
  <div>
    <Post />
    <Post />
    <Post />
  </div>
);

export default PostsContainer