// reducers/authReducer.js
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/authActions';
  
  const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
      case LOGIN_SUCCESS:
        return { ...state, user: action.payload, error: null };
      case SIGNUP_FAILURE:
      case LOGIN_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  