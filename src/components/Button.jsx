import React from 'react'

const Button = ({text,className}) => {
  return (
     <button className={`bg-secondary py-[15px] px-[42px] text-white text-xl font-semibold font-inter rounded-[10px] border-2 border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-500 ${className}`} >{text}</button>
  )
}

export default Button