import React from 'react'
import Image from '../components/Image'

const CounterSuccess = ({ title, text }) => {
    return (
        <div>
            <h2 className='text-[50px] text-[#151515] font-bold font-["Inter"]'>{title}</h2>
            <p className='text-xl text-[#737373] font-medium font-["Inter"] pt-5 pb-5'>{text}</p>

            
        </div>


    )
}

export default CounterSuccess