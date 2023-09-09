import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className ="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>
        Search for the keywords to learn more about each warning.       
        To ignore, add // eslint-disable-next-line to the line before.  
        WARNING in eslint src\container\Header\Header.jsx Line 4:10:  'images' is defined but never used  no-unused-vars
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome } alt="header img" />
    </div>
  </div>
);

export default Header;
