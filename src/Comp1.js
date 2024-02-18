import React, {forwardRef} from 'react';
import withDimensions from './WithDimensions';
const Comp1 = (props,forwardReffromParent) => {
  return (
    <div ref={forwardReffromParent} className="comp1">Hey I am Comp1 and my width is: {props.width} and my random number is: {props.randomNumber}</div>
  )
}

export default withDimensions(forwardRef(Comp1));