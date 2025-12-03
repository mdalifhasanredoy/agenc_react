import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import bannerimg from '../assets/banner.png'
import Image from '../components/Image'

const Banner = () => {
    return (
        <section className='py-20'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-1/2'>
                    <h1 className='text-[75px] text-[#151515] font-bold font-["Inter"] leading-[120%]'>We Help brands with high quality services</h1>
                    <p className='w-[604px] leading-[26px] text-base text-[#737373] font-normal font-["Inter"] mb-[30px] '> There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    <Button text="Get Started"/>
                    </div>
                    <div className='w-1/2 '>
                    <Image src={bannerimg}/>
                    </div>
                </Flex>

            </Container>
        </section>
    )
}

export default Banner 