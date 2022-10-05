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
  
  function addPost(post) {
    dispatch({
      type: 'ADD_POST',
      payload: post
    })
  }

  return (<GlobalContext.Provider value={{
    posts: state.posts,
    addPost,
    getPosts
  }}>
    {children}
  </GlobalContext.Provider>);
}