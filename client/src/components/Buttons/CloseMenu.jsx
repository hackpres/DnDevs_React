import React from 'react'

function CloseMenu(props) {
  return (
    <button onClick={props.closeModal}>{props.label}</button>
  )
}

export default CloseMenu