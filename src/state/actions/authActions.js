// actions/authActions.js
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const signup = (credentials) => {
  return (dispatch) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === credentials.email);

    if (userExists) {
      dispatch({ type: SIGNUP_FAILURE, payload: 'User already exists' });
    } else {
      users.push(credentials);
      localStorage.setItem('users', JSON.stringify(users));
      dispatch({ type: SIGNUP_SUCCESS, payload: credentials });
    }
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === credentials.email && user.password === credentials.password);

    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: 'Invalid email or password' });
    }
  };
};
