import React, {useContext} from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import { GlobalContext } from '../context/GlobalState';

const Post = (props) => {
  const { deletePost, updatePost } = useContext(GlobalContext);
  const { name, location, type, quantity, user, postID, description, event} = props;
  return (
    // <div>In the Post</div>
      <div class="col-md-4 mb-5" id={postID}>
        <div class="card-body">
          <div class="card h-100">
          <h2 class="card-title">Item Name: {name} </h2>
          <p class="card-subtitle mb-2 text-muted">Location: {location}</p>
          <p class="card-subtitle mb-2 text-muted">Event: {event}</p>       
          <p class="card-subtitle mb-2 text-muted">Item Type: {type}</p>
          <p class="card-subtitle mb-2 text-muted">Quantity: {quantity}</p>
          <p class="card-subtitle mb-2 text-muted">Created By: {user}</p>
          <p class="card-text">Description: {description}</p>
          <div class="card-footer">
            <Link to="/" class="card-link" onClick={() => updatePost(postID)}>Claim</Link>
            <Link to="/" class="card-link" onClick={() => deletePost(postID)}>Delete</Link>
          </div>        
        </div>
        </div>
      </div>
  )};
  
  export default Post