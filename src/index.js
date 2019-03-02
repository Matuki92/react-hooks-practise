// react
import React, { Fragment, useReducer } from 'react';
import ReactDOM from 'react-dom';
// router
import { MemoryRouter, Route } from 'react-router-dom';
// components
import Nav from './components/nav';
import About from './components/about';
import SignUp from './components/signup';
import LogIn from './components/login';
// lang
import { Lang, langReducer, initialLangState } from './lang/index';
// user
import { User, userReducer, initialUserState } from './user/index';
// css
import './styles.css';

const App = () => {

// language context provider
const [ { lang }, langDispatch ] = useReducer(langReducer, initialLangState),
  [ { user }, userDispatch ] = useReducer(userReducer, initialUserState);
  console.log(user ? 'logged in' : 'logged out');
  return (
    // wrap app in provider and router
    <Lang.Provider value={{ lang, langDispatch }}>
      <User.Provider value={{ user, userDispatch }}>
        <MemoryRouter>
          <Fragment>

            {/* app layout start */}
            <Nav/>
            {/* route outlet */}
            <section className="container">
              <Route exact path="/"/>
              {!user &&
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
      </User.Provider>
    </Lang.Provider>
  );
}

// render app
ReactDOM.render(
      <App/>,
  // render in root div
  document.getElementById('root')
);