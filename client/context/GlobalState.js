import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  // posts: [
  //   {name: 'water', location: 'nook\'s cranny', type:'food/beverage', quantity: 5, description: 'bottled water'},
  //   {name: 'coffee', location: 'nook\'s cranny', type:'food/beverage', quantity: 3, description: 'iced coffee'}
  // ]
  posts: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  async function getPosts() {
    try {
      const res = await axios.get('/post')
      dispatch({
        type: 'GET_POSTS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      })
    }
  }
  
  async function searchPosts(keyword) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      console.log('searching');
      const res = await axios.post('/post/search',keyword, config)
      dispatch({
        type: 'SEARCH_POSTS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      })
    }
  }


  async function addPost(post) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/post', post, config)
      getPosts() // useEffect is not properly working so manually run the getPosts() again
      console.log(res)
      dispatch({
        type: 'ADD_POST',
        payload: res.data
      })
    } catch (err) {
      dispatch({
      type: 'POST_ERROR',
      payload: err.response.data.error
    })
  }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/post/${id}`)
      getPosts(); // useEffect is not properly working so manually run the getPosts() again
      dispatch({
        type: 'DELETE_POSTS',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function updatePost(id) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.put(`/post/${id}`)
      getPosts(); // useEffect is not properly working so manually run the getPosts() again
      console.log(res)
      dispatch({
        type: 'UPDATE_POST',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function addUser(user) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/user', user, config)
      console.log(res)
      dispatch({
        type: 'ADD_USER',
        payload: res.data
      })
    } catch (err) {
      dispatch({
      type: 'POST_ERROR',
      payload: err.response.data.error
    })
  }
  }

  return (<GlobalContext.Provider value={{
    posts: state.posts,
    addPost,
    getPosts,
    deletePost,
    updatePost,
    addUser,
    searchPosts
  }}>
    {children}
  </GlobalContext.Provider>);
}