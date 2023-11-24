import React, { useState } from 'react'

const HideAndShow = () => {
    const [display,setDisplay]= useState(true);
    const handleDisplay = ()=>{
        setDisplay(!display);
    }
  return (
    <>
    <div>HideAndShow</div>

    <button onClick={handleDisplay}> {(display)?"Hide the Element":"Show the element"} </button>
    {(display)&&<div>This is the element</div>}
    </>
  )
}

export default HideAndShow