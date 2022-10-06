import React from 'react'
import NavIcon from './NavIcon'
import NavScroll from './NavScroll'
import NavText from './NavText'
import Navigation from '../Buttons/Navigation'

// shop home code profile

function Nav() {
  return (
    <>
      <Navigation title="Shop" destination="shop">
        <NavIcon />
        <NavScroll />
        <NavText/>
      </Navigation>

      <Navigation title="Home" destination="home">
        <NavIcon />
        <NavScroll />
        <NavText/>
      </Navigation>

      <Navigation title="Code" destination="code">
          <NavIcon />
          <NavScroll />
          <NavText/>
      </Navigation>

      <Navigation title="Profile" destination="profile">
        <NavIcon />
        <NavScroll />
        <NavText/>
      </Navigation>
    </>
  )
}

export default Nav