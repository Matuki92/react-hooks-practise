// react
import React, { useState, useContext } from 'react';
// lang
import { Lang } from '../lang/index';

const SignUp = () => {
  console.log('rendering signup');

  const [ formData, setFormData ] = useState({
    username: '',
    password: '',
    repeatedPassword: ''
  });

  const { lang } = useContext(Lang);
  
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
  }

  return (
    <form onSubmit={dispatchFormSubmit}>
      <h2>{lang.signup}</h2>

      <div className="field">
        <label>{lang.username}</label>
        <input name="username" type="text" value={formData.username} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{lang.password}</label>
        <input name="password" type="password" value={formData.password} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>{lang.repeat_password}</label>
        <input name="repeatedPassword" type="password" value={formData.repeatedPassword} onChange={dispatchInputChange}/>
      </div>

      <button type="submit">{lang.submit}</button>
      
    </form>
  );
}

export default React.memo(SignUp);