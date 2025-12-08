import React from 'react'
import Image from '../components/Image'

import SubHeading from '../components/SubHeading'

const WorkCard = ({image,title,text}) => {
    return (
        <div className='w-[424px] rounded-[20px] hover:shadow-lg duration-300'>
            <Image src={image} />
            <div className='px-[42px]'>
                <h3 className='text-2xl text-center text-third font-bold font-inter pt-[30px] pb-[10px]'>{title}</h3>
            <SubHeading className='text-center pb-[30px]' text={text} />
            </div>
        </div>
    )
}

export default WorkCard