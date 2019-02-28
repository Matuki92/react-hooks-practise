// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import { MemoryRouter } from 'react-router-dom';
// app
import App from './app';
// css
import './styles.css';

// render app
ReactDOM.render(
  // wrap in router
  <MemoryRouter>
    <App/>
  </MemoryRouter>,
  // render in root
  document.getElementById('root')
);