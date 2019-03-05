// react
import React, { useState, useContext } from 'react';
// lang
import { Lang } from '../lang/index';
// user
import { User } from '../user/index';
// auth
import { login } from '../auth/authservice';

const LogIn = () => {
  console.log('rendering login');

  const [ formData, setFormData ] = useState({
    username: '',
    password: ''
  });

  const { lang } = useContext(Lang),
    { userDispatch } = useContext(User);
  
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
    }).then(user => userDispatch({ type: 'SET_USER', payload: user }));
  }

  return (
    <form onSubmit={dispatchFormSubmit}>
      <h2>{lang.login}</h2>

      <div className="field">
        <label>{lang.username}</label>
        <input name="username" type="text" value={formData.username} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{lang.password}</label>
        <input name="password" type="password" value={formData.password} onChange={dispatchInputChange}/>
      </div>

      <button type="submit">{lang.submit}</button>
      
    </form>
  );
}

export default React.memo(LogIn);