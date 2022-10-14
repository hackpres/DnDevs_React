import React from 'react'
import NavIcon from './NavIcon'
import NavScroll from './NavScroll'
import NavText from './NavText'
import Navigation from '../Buttons/Navigation'
import '../../assets/css/Nav.css'

import shopIcon from '../../assets/img/icons/Shop.png';
import homeIcon from '../../assets/img/icons/Map.png';
import codeIcon from '../../assets/img/icons/Bag.png';
import profileIcon from '../../assets/img/icons/Helmet.png';

function Nav() {
  return (
    <>
      <div>
        <Navigation title="Shop" destination="shop">
          <img id="shop" src={shopIcon} />
        </Navigation>
      </div>

      <Navigation id="home" title="Home" destination="home">
        <NavIcon />
        <NavScroll />
        <NavText />
      </Navigation>

      <Navigation id="code" title="Code" destination="code">
        <NavIcon />
        <NavScroll />
        <NavText />
      </Navigation>

      <Navigation id="profile" title="Profile" destination="profile">
        <NavIcon />
        <NavScroll />
        <NavText />
      </Navigation>
    </>
  )
}

export default Nav;