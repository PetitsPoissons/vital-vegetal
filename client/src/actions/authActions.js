import axios from 'axios';
import {
  FETCH_ME,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Fetch current user
export const fetchMe = () => async (dispatch) => {
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/users/me');
    dispatch({ type: FETCH_ME, payload: res.data });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Server error',
    });
  }
};

// Sign up new user
export const signUp = (signUpData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/users/signup', signUpData, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.token, // we get the token back
    });
    dispatch(fetchMe());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email is already in use',
    });
  }
};

// Sign in user
export const signIn = (signInData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/users/signin', signInData, config);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data.token, // we get the token back
    });
    dispatch(fetchMe());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid credentials',
    });
  }
};

// Sign out user
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
};
