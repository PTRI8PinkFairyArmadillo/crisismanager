import React, { useState, useContext, useEffect } from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import Post from './Post';
import Footer from './Footer';
import { GlobalContext } from '../context/GlobalState';
import AddButton from './AddButton';
import NewPost from './NewPost';


const PostsContainer = () => {
  // const [postsList, setList] = useState([
  //     {name: 'water', location: 'nook\'s cranny', type:'food/beverage', quantity: 5, description: 'bottled water'},
  //     {name: 'coffee', location: 'nook\'s cranny', type:'food/beverage', quantity: 3, description: 'iced coffee'}
  //   ]); 

  // make a function that fetches the data from the database
    // use that data to update the state
      // use setList
        // setList takes in a FUNCTION as its parameter
  
  // useEffect hook?

  const { posts, getPosts } = useContext(GlobalContext); //array of posts from the state
  useEffect(() => {
    getPosts();
  }, []);
  
  const postsList = []; // array of post components
  posts.forEach((el, i) => {
    postsList.push(<Post key={i} postID={posts[i].id} event={posts[i].event} name={posts[i].name} quantity={posts[i].quantity} type={posts[i].type} location={posts[i].location} user={posts[i].username} description={posts[i].description} />)
      // postsList.push(<Post key={i} row={i}  name={posts[i].name} location={posts[i].location} type={posts[i].type} quantity={posts[i].quantity} description={posts[i].description} />)
    })

return (
  <div>
    <AddButton />
    {postsList}
    <Footer />
  </div>
)};

export default PostsContainer