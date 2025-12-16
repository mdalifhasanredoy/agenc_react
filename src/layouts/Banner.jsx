import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import bannerimg from '../assets/banner.png'
import Image from '../components/Image'

const Banner = () => {
    return (
        <section className='pt-20'>
            <Container>
                <Flex className='items-center !block md:!flex px-3 md:px-0'>
                    <div className='md:w-1/2 '>
                    <h1 className='text-3xl text-center md:text-left md:text-[75px] pb-[15px] md:pb-0 text-[#151515] font-bold font-["Inter"] leading-[120%]'>We Help brands with high quality services</h1>
                    <p className='text-center md:text-left w-auto md:w-[604px] leading-[26px] text-base text-[#737373] font-normal font-["Inter"] mb-[30px] '> There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    <div className='text-center md:text-left'>
                        <Button text="Get Started"/>
                    </div>
                    </div>
                    <div className='md:w-1/2 '>
                    <Image className="w-3/4 mx-auto pt-10 md:pt-0" src={bannerimg}/>
                    </div>
                </Flex>

            </Container>
        </section>
    )
}

export default Banner 