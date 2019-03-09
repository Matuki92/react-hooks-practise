// import all other reducers
import { langReducer, initialLangState } from './lang/index';
import { userReducer, initialUserState } from './user/index';

// merge all other states
export const initialAppState = {
  user: initialUserState,
  lang: initialLangState
};

// main reducer calls the desired reducer based on the request value
// otherwise returns state
export const mainReducer = (state, action) => {
  const { type } = action;

    if ( type.includes('USER')) {
      return userReducer(state, action);
    } else if (type.includes('LANG')) {
      return langReducer(state, action);
    } else return state;
}