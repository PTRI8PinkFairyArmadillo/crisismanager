import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  posts: [
    {name: 'water', location: 'nook\'s cranny', type:'food/beverage', quantity: 5, description: 'bottled water'},
    {name: 'coffee', location: 'nook\'s cranny', type:'food/beverage', quantity: 3, description: 'iced coffee'}
  ]
  // posts: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  function addPost(post) {
    dispatch({
      type: 'ADD_POST',
      payload: post
    })
  }

  return (<GlobalContext.Provider value={{
    posts: state.posts,
    addPost
  }}>
    {children}
  </GlobalContext.Provider>);
}