import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  // posts: [
  //   {name: 'water', location: 'nook\'s cranny', type:'food/beverage', quantity: 5, description: 'bottled water'},
  //   {name: 'coffee', location: 'nook\'s cranny', type:'food/beverage', quantity: 3, description: 'iced coffee'}
  // ]
  posts: [],
  error: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getPosts() {
    try {
      const res = await axios.get("/post");
      console.log(res);
      dispatch({
        type: "GET_POSTS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "POST_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addPost(post) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/post", post, config);
      getPosts();
      console.log(res);
      dispatch({
        type: "ADD_POST",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "POST_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/post/${id}`);
      getPosts();
      dispatch({
        type: "DELETE_POSTS",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "POST_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function verifyUser(userInput) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      console.log('inside global state');
      const res = await axios.post("/user/login", userInput, config);
      console.log('response from login post in verifyUser - GlobalState', res);
      dispatch({
        type: "VERIFY_USER",
        payload: res.data,
      });
      return true;
    } catch (err) {
      console.log('caught error in global state ', err)
      console.log('payload: ', err.response.data)
      dispatch({
        type: "LOGIN_ERROR",
        payload: err.response.data,
      });
      return false;
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        posts: state.posts,
        addPost,
        getPosts,
        deletePost,
        verifyUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
