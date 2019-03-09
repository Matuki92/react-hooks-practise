// react
import React, { useState, useContext } from 'react';
// store
import Store from '../store/store';
// auth
import { login } from '../auth/authservice';

const LogIn = () => {
  console.log('rendering login');

  const [ formData, setFormData ] = useState({
    username: '',
    password: ''
  });

  const { store, dispatch } = useContext(Store);
  
  // main dispatch function for all the inputs
  const dispatchInputChange = ({ target }) => {

    // do something, validate.

    // save changes
    setFormData({
      ...formData,
      // love this syntax for some reason
      [target.name]: target.value
    });
  }

  const dispatchFormSubmit = e => {
    e.preventDefault();
    // do something, validate.

    // try to log in and set new data
    login({
      username: formData.username,
      password: formData.password
    }).then(user => dispatch({ type: 'SET_USER', payload: user }));
  }

  return (
    <form onSubmit={dispatchFormSubmit}>
      <h2>{store.lang.login}</h2>

      <div className="field">
        <label>{store.lang.username}</label>
        <input name="username" type="text" value={formData.username} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{store.lang.password}</label>
        <input name="password" type="password" value={formData.password} onChange={dispatchInputChange}/>
      </div>

      <button type="submit">{store.lang.submit}</button>
      
    </form>
  );
}

export default React.memo(LogIn);