import React,{forwardRef} from 'react'

const Input = forwardRef((props,ref) => {
  return (
    <input ref={ref} type="text"  />
  )
})

export default Input