// react
import React, { useContext } from 'react';
// lang
import { Lang } from '../lang/index';

const About = () => {
  console.log('rendering about');

  const { lang } = useContext(Lang);

  return (
    <div className="about">
      <p>{lang.about}</p>
    </div>
  );
}

export default About;