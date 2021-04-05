import {
  FETCH_ME,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  isAuthenticated: null,
  me: null,
  errorMessage: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ME:
      return {
        ...state,
        loading: false,
        isAuthenticated: payload ? true : false,
        me: payload,
        errorMessage: '',
      };
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', payload); // store token into local storage
      return {
        ...state,
        token: payload,
        loading: false,
        isAuthenticated: true,
        errorMessage: '',
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
        me: null,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
