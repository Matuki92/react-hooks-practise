// react
import React, { useContext } from 'react';
// store
import Store from '../store/store';

const About = () => {
  console.log('rendering about');

  const { store, dispatch } = useContext(Store);

  return (
    <div className="about">
      <p>{store.lang.about}</p>
    </div>
  );
}

export default React.memo(About);