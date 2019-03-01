// react
import React, { useState } from 'react';

const SignUp = () => {
  console.log('rendering signup');

  const [ formData, setFormData ] = useState({
    username: '',
    password: '',
    repeatedPassword: ''
  });

  
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
      <h2>Sign Up</h2>

      <div className="field">
        <label>Username</label>
        <input name="username" type="text" value={formData.username} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={dispatchInputChange}/>
      </div>

      <div className="field">
        <label>Repeat password</label>
        <input name="repeatedPassword" type="password" value={formData.repeatedPassword} onChange={dispatchInputChange}/>
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
}

export default React.memo(SignUp);