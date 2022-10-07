import React from 'react';

function Menu(props) {

  return (
    <button onClick={props.openModal}>{props.label}</button>
  )
}

export default Menu