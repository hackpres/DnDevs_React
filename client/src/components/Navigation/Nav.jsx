import React from 'react'
import NavIcon from './NavIcon'
import NavScroll from './NavScroll'
import NavText from './NavText'
import Navigation from '../Buttons/Navigation'
import '../../assets/css/Nav.css'

function Nav() {
  return (
    <>
      <div className="shop">
        <Navigation title="Shop" destination="shop" />
      </div>
      <div className="home">
        <Navigation title="Home" destination="home" />
      </div>
      <div className="code">
        <Navigation title="Code" destination="code" />
      </div>
      <div className="profile">
        <Navigation title="Profile" destination="profile" />
      </div>
    </>
  )
}

export default Nav;