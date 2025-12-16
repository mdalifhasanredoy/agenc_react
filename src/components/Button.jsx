import React from 'react'

const Button = ({text,className}) => {
  return (
     <button className={`bg-secondary py-2 px-6 md:py-[15px] md:px-[42px] text-white text-base md:text-xl font-semibold font-inter rounded-[10px] border-2 border-transparent md:hover:bg-transparent md:hover:text-secondary hover:border-secondary duration-500 ${className}`} >{text}</button>
  )
}

export default Button