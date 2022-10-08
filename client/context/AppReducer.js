export default (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        // posts: [...state.posts, action.payload]
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    case 'UPDATE_POST':
      return {
        ...state,
        // posts: action.payload
      }
    case 'POST_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case "VERIFY_USER":
      return {
        ...state,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error2: action.payload,
      };
    default:
      return state;
  }
};
