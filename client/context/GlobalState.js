import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

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
      const res = await axios.get('/post')
      dispatch({
        type: 'GET_POSTS',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error,
      });
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
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/post', post, config);
      getPosts(); // useEffect is not properly working so manually run the getPosts() again
      console.log(res);
      dispatch({
        type: 'ADD_POST',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/post/${id}`);
      getPosts(); // useEffect is not properly working so manually run the getPosts() again
      dispatch({
        type: 'DELETE_POSTS',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function verifyUser(userInput) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log('inside global state');
      const res = await axios.post('/user/login', userInput, config);
      console.log('response from login post in verifyUser - GlobalState', res);
      dispatch({
        type: 'VERIFY_USER',
        payload: res.data,
      });
      if (res.data === 'Wrong password') return false;
      return true;
    } catch (err) {
      console.log('caught error in global state ', err);
      console.log('payload: ', err.response.data);
      dispatch({
        type: 'LOGIN_ERROR',
        payload: err.response.data,
      });
      return false;
    }
  }

  async function logoutUser(userInput) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log('inside global state');
      const res = await axios.post('/user/logout', userInput, config);
      console.log('response from logout post in logoutUser - GlobalState', res);
      dispatch({
        type: 'LOGOUT_USER',
        payload: res.data,
      });
      return true;
    } catch (err) {
      console.log('caught error in global state ', err);
      console.log('payload: ', err.response.data);
      dispatch({
        type: 'LOGOUT_ERROR',
        payload: err.response.data,
      });
      return false;
    }
  }

  async function updatePost(id) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/post/${id}`);
      getPosts(); // useEffect is not properly working so manually run the getPosts() again
      console.log(res);
      dispatch({
        type: 'UPDATE_POST',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function addUser(user) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/user', user, config);
      console.log(res);
      dispatch({
        type: 'ADD_USER',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function getUser(id) {
    try {
      if (id) {
        const res = await axios.get(`/user/${id}`);
        console.log('res', res);
        dispatch({
          type: 'GET_USER',
          payload: res.data,
        });
        if (res.data.name) return res.data.name;
      } else return false;
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        posts: state.posts,
        addPost,
        getPosts,
        deletePost,
        updatePost,
        addUser,
        verifyUser,
        logoutUser,
        getUser,
        searchPosts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
