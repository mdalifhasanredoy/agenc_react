import React from 'react'
import Image from '../components/Image'

import SubHeading from '../components/SubHeading'

const ServiceCard = ({image,title,text}) => {
  return (
    
    <div className='w-[424px] py-12 px-14 text-center rounded-[20px] hover:shadow-lg duration-300'>
      <Image className='mx-auto' src={image}/>
      <h3 className='text-2xl text-third font-bold font-inter pt-10 pb-5 '>{title}</h3>
      <SubHeading className='text-center' text={text}/>
    </div>
  )
}

export default ServiceCard