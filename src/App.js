// react
import React, { useReducer } from 'react';
// components
import Nav from './components/nav';
// lang
import { Lang, langReducer, initialLangState } from './lang/index';

const App = () => {
  
const [ { lang }, dispatch ] = useReducer(langReducer, initialLangState);

  return (
    <Lang.Provider value={{ lang, dispatch }}>
      <Nav/>
    </Lang.Provider>
  );
}

export default App;