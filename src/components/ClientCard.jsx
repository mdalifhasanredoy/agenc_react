import React from 'react'
import Image from '../components/Image'
import clientvector from '../assets/clientvector.png'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import clientone from '../assets/clientone.png'
import { FaStar } from "react-icons/fa";

const ClientCard = ({ profileimg, text, title, className }) => {
    return (
      <div className={`${className}`}>
          <div className="w-[424px] rounded-[20px] hover:shadow-lg duration-300 px-[59px] py-[55px]">
            <Image src={clientvector} />
            <SubHeading className="w-[307px] text-[#7B7B7B] py-5 " text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." />
            <ul className='flex gap-x-2 text-[24px] pb-[30px]'>
                <li><FaStar className='text-[#F9BD2C]' /></li>
                <li><FaStar className='text-[#F9BD2C]' /></li>
                <li><FaStar className='text-[#F9BD2C]' /></li>
                <li><FaStar className='text-[#F9BD2C]' /></li>
                <li><FaStar className='text-[#F9BD2C]' /></li>
            </ul>
            <div>
                <Flex>
                    <Image src={profileimg} />
                    <div className='px-5'>
                        <h3 className='font-semibold font-inter leading-[120%]'>{title}</h3>
                        <SubHeading text={text} />
                    </div>
                </Flex>
            </div>

        </div>
      </div>
    )
}

export default ClientCard