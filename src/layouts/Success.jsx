import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CounterSuccess from '../components/CounterSuccess'
import Image from '../components/Image'
import eclipseone from '../assets/eclipseone.png'
import eclipsetwo from '../assets/eclipsetwo.png'
import eclipsethree from '../assets/eclipsethree.png'
import eclipsefour from '../assets/eclipsefour.png'
import eclipsefive from '../assets/eclipsefive.png'
import { FaStar } from "react-icons/fa";

const Success = () => {
    return (
        <section className='py-[150px]'>
            <Container >
                <Flex className='bg-[#F8F6FE] py-[86px] px-12 rounded-[20px]'>
                    <div className='w-5/12'>
                        <h6 className='text-2xl text-[#6A4DF4] font-medium font-["Inter"]'>Our Success</h6>
                        <h3 className='w-[387px] text-4xl text-[#151515] font-semibold font-["Inter"] pt-4'>
                            West cost Brand makers-Global Edge
                        </h3>
                    </div>
                    <div className='w-7/12 '>

                        <Flex className='justify-between'>

                            <div>
                                <CounterSuccess title="200+" text="Customer Satisfied" />
                                <div className='relative'>
                                    <div className='absolute top-[0px] left-[0px] w-[35px] h-[35px] rounded-full border-2 border-white'>
                                        <Image className='full rounded-full' src={eclipseone} />
                                    </div>
                                    <div className='absolute top-[0px] left-[15px] w-[35px] h-[35px] rounded-full border-2 border-white'>
                                        <Image className='full rounded-full' src={eclipsetwo} />
                                    </div>
                                    <div className='absolute top-[0px] left-[30px] w-[35px] h-[35px] rounded-full border-2 border-white'>
                                        <Image className='full rounded-full' src={eclipsethree} />
                                    </div>
                                    <div className='absolute top-[0px] left-[50px] w-[35px] h-[35px] rounded-full border-2 border-white'>
                                        <Image className='full rounded-full' src={eclipsefour} />
                                    </div>
                                    <div className='absolute top-[0px] left-[70px] w-[35px] h-[35px] rounded-full border-2 border-white'>
                                        <Image className='full rounded-full' src={eclipsefive} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <CounterSuccess title="4.5" text="200+ Avg rating" />
                                <ul className='flex gap-x-2'>
                                    <li><FaStar className='text-[#FFAC4A]' /></li>
                                    <li><FaStar className='text-[#FFAC4A]' /></li>
                                    <li><FaStar className='text-[#FFAC4A]' /></li>
                                    <li><FaStar className='text-[#FFAC4A]' /></li>
                                    <li><FaStar className='text-[#FFAC4A]' /></li>
                                </ul>
                            </div>

                            <div>
                                <CounterSuccess title="351+" text="Project Delivered" />
                                <a className='text-[#6A4DF4]' href="">See Works</a>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Success