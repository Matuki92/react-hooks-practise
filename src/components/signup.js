// react
import React, { useState, useContext } from 'react';
// store
import Store from '../store/store';

const SignUp = () => {
  console.log('rendering signup');

  const [ formData, setFormData ] = useState({
    username: '',
    password: '',
    repeatedPassword: ''
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
    // dispatch
  }

  return (
    <form onSubmit={dispatchFormSubmit}>
      <h2>{store.lang.signup}</h2>

      <div className="field">
        <label>{store.lang.username}</label>
        <input name="username" type="text" value={formData.username} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{store.lang.password}</label>
        <input name="password" type="password" value={formData.password} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{store.lang.repeat_password}</label>
        <input name="repeatedPassword" type="password" value={formData.repeatedPassword} onChange={dispatchInputChange}/>
      </div>

      <button type="submit">{store.lang.submit}</button>
      
    </form>
  );
}

export default React.memo(SignUp);