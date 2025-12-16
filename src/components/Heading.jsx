import React from 'react'

const Heading = ({text,className}) => {
  return (
    
    <h2 className={`text-3xl md:text-[45px] text-third font-bold font-inter ${className}`}>{text}</h2>
  )
}

export default Heading