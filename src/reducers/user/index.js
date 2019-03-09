
export const initialUserState = null;

export const userReducer = (state, action) => {

  switch (action.type) {
    case 'USER_SET':
      return { ...state, user: action.payload };
    case 'USER_LOG_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
}