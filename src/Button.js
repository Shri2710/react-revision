import React from 'react'

const Button = ({children,clickAction}) => {

    const handleClick = ()=> clickAction();
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button