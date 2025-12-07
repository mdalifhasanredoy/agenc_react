import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <p className={`text-base text-primary font-normal font-inter ${className}`}>
        {text}
    </p>
  )
}

export default SubHeading