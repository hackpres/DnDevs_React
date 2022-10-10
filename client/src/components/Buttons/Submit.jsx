import React from 'react'

function Submit() {
  const handleSubmit = () => {
    console.log(value);
  }

  return (
    <button onSubmit={() => handleSubmit()}>Submit</button>
  )
}

export default Submit