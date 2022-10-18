import React from 'react'
import Navigation from '../Buttons/Navigation'
import '../../assets/css/Nav.css'
import '../../assets/css/Heading.css'



function Nav() {
  return (
    <>
    <div className="home">
        <Navigation title="Home" destination="home" />
      </div>
    <div className="shop">
        <Navigation title="Shop" destination="shop" />
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