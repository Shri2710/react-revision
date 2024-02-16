import React ,{memo} from 'react'

const Button = memo(({ children, clickAction }) => {
  console.log("Button is rerendered")
  const handleClick = () => clickAction();
  return (
    <button onClick={handleClick}>{children}</button>
  )
})

export default Button