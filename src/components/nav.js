// react
import React, { useState, useContext } from 'react';
// router
import { NavLink } from 'react-router-dom';
// lang
import { Lang } from '../lang/index';

const Nav = () => {
  console.log('rendering nav');

  const [ showMenu, setShowMenu ] = useState(false);
  const { lang, dispatch } = useContext(Lang);

  //
  // toggle menu functions
  //
  const hideMenu = ({ target }) => {
    const langButton = document.querySelector('#lang-button');
    // dont hide menu if language is toggled
    if (target !== langButton) {
      // hide menu
      setShowMenu(false);
      // clean listener
      document.removeEventListener('click', hideMenu);
    };
  }
  const handleShowMenu = () => {
    if (!showMenu) {
      // add listener to hide menu on click or tap
      document.addEventListener('click', hideMenu);
      // show menu
      setShowMenu(true);
    }
  }

  // render
  return (
    <nav className="menu">
    {/* responsive nav menu */}

      <button 
        className="toggle-menu"
        onClick={handleShowMenu}
      >
        &#9776;
      </button>

      <ul 
        className="list"
        style={{ display: showMenu ? 'block' : 'none' }}
      >
        {/* home button */}
        <li>
          <NavLink to="/">
            <button className="nav-button" type="button">
              {lang.home_button}
            </button>
          </NavLink>
        </li>

        <hr/>

        <div className="secondary-buttons">
        
          {/* lang toggle button */}
          <li>
            <button id="lang-button" className="nav-button" type="button" onClick={() => dispatch({ type: 'TOGGLE-LANG' })}>
              {lang.id === 'EN' ? 'Español' : 'English'}
            </button>
          </li>

          <hr/>

          {/* about button */}
          <li>
            <NavLink exact to="/about">
              <button className="nav-button" type="button">
                {lang.about_button}
              </button>
            </NavLink>
          </li>

        </div>

      </ul>
    </nav>
  );
}

export default React.memo(Nav);