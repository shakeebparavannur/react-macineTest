import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [ value,setValue] = useState('')
    const handleInput = (e)=>{
        setValue(e.target.value)
    }
  return (
    <>
    <div>TwoWayBinding</div>
    <input type="text" onChange={handleInput} />
    <span>{value}</span>
    </>
  )
}

export default TwoWayBinding