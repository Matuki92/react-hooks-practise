// react
import { createContext } from 'react';

export const initialUserState = {
  // this hard coded data should be fetched from a server
  user: null
}

export const User = createContext();

export const userReducer = (state, action) => {

  switch (action.type) {
    case 'SET_USER':
      return { state, user: action.payload };
    case 'LOG_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
}