import React, {useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import Post from './Post';
import Footer from './Footer'

const PostsContainer = () => {
const [postsList, setList] = useState([
    {name: 'water', location: 'nook\'s cranny', type:'food/beverage', quantity: 5, description: 'bottled water'},
    {name: 'coffee', location: 'nook\'s cranny', type:'food/beverage', quantity: 3, description: 'iced coffee'}
  ]); 

  // make a function that fetches the data from the database
    // use that data to update the state
      // use setList
        // setList takes in a FUNCTION as its parameter
  
  // useEffect hook?

const posts = [];
postsList.forEach((el, i) => {
  posts.push(<Post key={i} row={i}  name={postsList[i].name} location={postsList[i].location} type={postsList[i].type} quantity={postsList[i].quantity} description={postsList[i].description} />)
})

return (
  <div>
    {posts}
    <Footer />
  </div>
)};

export default PostsContainer