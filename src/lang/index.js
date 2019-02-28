// react
import { createContext } from 'react';
// languages
import EN from './english';
import ES from './spanish';


// check for previous lang setting 
const checkStorage = () => {
  try {
    const result = window.localStorage.getItem('react_test_app_lang');
    if (result) {
      return result === 'ES' ? ES : EN
    } else {
      return null;
    }
  } catch {
    // no support for storage
    return null;
  }
}

//initial
export const initialLangState = {
  lang: checkStorage() || EN
}

// context provider
export const Lang = createContext();

//export reducer
export const langReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE-LANG':
      const lang = state.lang.id === 'EN' ? ES : EN;
      window.localStorage.react_test_app_lang = lang.id;
      return {
          ...state, 
          lang
        }
    default:
      return state;
  }
}
