// react
import { createContext } from 'react';
// languages
import EN from './english';
import ES from './spanish';

//initial
export const initialLangState = {
  lang: EN
}

// context provider
export const Lang = createContext();

//export reducer
export const langReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE-LANG':
      return { 
        ...state, 
        lang: state.lang.id === 'EN' ? ES : EN
      };
    default:
      return state;
  }
}