import React from 'react';
import Navigation from '../components/Buttons/Navigation';

function Landing() {
  return (
    <>
      <Navigation title="Login" destination="login" />
      <Navigation title="Signup" destination="signup" />
    </>
  )
}

export default Landing