<<<<<<< HEAD
import React from 'react'

function Link() {
  return (
    <div>Link</div>
  )
}

export default Link
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const [page, setPage] = useState('');
  const handleNavigation = (route) => {
    setPage(route);
  }

  return (
    <Link to={`/${props.destination}`}>
      <button onClick={() => handleNavigation(`${props.destination}`)}>
        {props.title}
      </button>
    </Link>
  )
};

export default Navigation
>>>>>>> 08f2f60a62e548daff919073024bfae548cd9431
