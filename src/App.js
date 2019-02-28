// react
import React, { useReducer } from 'react';
// router
import { Route } from 'react-router-dom';
// components
import Nav from './components/nav';
import About from './components/about';
// lang
import { Lang, langReducer, initialLangState } from './lang/index';

const App = () => {
  // language context provider
  const [ { lang }, dispatch ] = useReducer(langReducer, initialLangState);

  return (
    <Lang.Provider value={{ lang, dispatch }}>
      <Nav/>

      <section className="container">
      {/* route outlet */}
        <Route exact path="/"/>
        <Route path="/about" component={About}/>
      </section>

    </Lang.Provider>
  );
}

export default App;