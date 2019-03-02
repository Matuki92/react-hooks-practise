import { createContext } from 'react';

export const initialUserState = {
  // this hard coded data should be fetched from a server
  user: {
    username: 'test user'
  }
}

export const User = createContext();

export const userReducer = (state, action) => {
  // hard coded
  switch (action.type) {
    case 'LOG_IN':
      return state;
    case 'SIGN_UP':
      return state;
    case 'LOG_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
}