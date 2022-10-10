import React, {useState} from 'react';


function Action(props) {
  const [action, setAction] = useState('');
  const handleAction = (props) => {
    setAction(props);
  }

  return (
    <button onClick={() => handleAction}>
      {props.label}
    </button>
  )
}

export default Action