// react
import React, { Fragment, useReducer } from 'react';
import ReactDOM from 'react-dom';
// router
import { MemoryRouter, Route } from 'react-router-dom';
// components
import Nav from './components/nav';
import About from './components/about';
// lang
import { Lang, langReducer, initialLangState } from './lang/index';
// css
import './styles.css';

const App = () => {

// language context provider
const [ { lang }, dispatch ] = useReducer(langReducer, initialLangState);

  return (
    // wrap app in provider and router
    <Lang.Provider value={{ lang, dispatch }}>
      <MemoryRouter>
        <Fragment>

          {/* app layout start */}
          <Nav/>

          <section className="container">
          {/* route outlet */}
            <Route exact path="/"/>
            <Route path="/about" render={() => <About/>}/>
          </section>

          {/* app layout end */}
        </Fragment>
      </MemoryRouter>
    </Lang.Provider>
  );
}

// render app
ReactDOM.render(
      <App/>,
  // render in root div
  document.getElementById('root')
);