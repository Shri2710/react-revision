import React from 'react'
import Button from './Button'

const NavBar = ({clickAction}) => {
  return (
    <>
     <span>Home   </span>
     <span>About Us   </span>
     <Button>Toggle Theme   </Button>
    </>
  )
}

export default NavBar