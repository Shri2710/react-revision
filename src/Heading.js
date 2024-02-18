import React from 'react'
import Text from './Text';
const Heading = ({headingTxt}) => {
  return (
    <>
        Hey I am heading component from Header
        <Text externalData={headingTxt}> Hey I am heading component</Text>
    </>
  )
}

export default Heading