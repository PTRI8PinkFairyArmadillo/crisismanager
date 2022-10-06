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
      console.log(res);
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
  
  async function addPost(post) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/post', post, config)
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

  return (<GlobalContext.Provider value={{
    posts: state.posts,
    addPost,
    getPosts,
    deletePost
  }}>
    {children}
  </GlobalContext.Provider>);
}