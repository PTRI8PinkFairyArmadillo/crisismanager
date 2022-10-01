import React from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;

const Post = () => (
    // <div>In the Post</div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Item Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Location:</h6>
        <h6 class="card-subtitle mb-2 text-muted">Item Type:</h6>
        <h6 class="card-subtitle mb-2 text-muted">Quantity:</h6>
        <p class="card-text">Description: This Item is brand new and ready to be used.</p>
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </div>
    </div>
  );
  
  export default Post