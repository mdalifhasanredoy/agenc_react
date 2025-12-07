import React from 'react'

const Listitem = ({text,className}) => {
  return (
      <li className={`text-lg text-primary font-normal font-inter hover:text-secondary hover:font-bold duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default Listitem