// react
import React, { Fragment, useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom';
// router
import { MemoryRouter, Route } from 'react-router-dom';
// components
import Nav from './components/nav';
import About from './components/about';
import SignUp from './components/signup';
import LogIn from './components/login';
// services
import { me } from './auth/authservice';
// lang
import { mainReducer, initialAppState } from './reducers/mainreducer';
// store
import Store from './store/store';
// css
import './styles.css';

const App = () => {

// store context provider
const [ store, dispatch ] = useReducer(mainReducer, initialAppState);

// run once on app load
useEffect(() => {
  // check for user session
  // TODO: loading feedback
  me()
    .then(user => {
      if (user) {
        dispatch({ type: 'USER_SET', payload: user})
      }
  })
}, []);

  return (
    // wrap app in provider and router
    <Store.Provider value={{ store, dispatch }}>
      <MemoryRouter>
        <Fragment>

          {/* app layout start */}
          <Nav/>
          {/* route outlet */}
          <section className="container">
            <Route exact path="/"/>
            {!store.user &&
              // protected routes
              <Fragment>
                <Route path="/signup" render={() => <SignUp/>}/>
                <Route path="/login" render={() => <LogIn/>}/>
              </Fragment>
            }
            <Route path="/about" render={() => <About/>}/>
          </section>

          {/* app layout end */}

        </Fragment>
      </MemoryRouter>
    </Store.Provider>
  );
}

// render app
ReactDOM.render(
      <App/>,
  // render in root div
  document.getElementById('root')
);