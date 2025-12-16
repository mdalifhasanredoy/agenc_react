import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import logo from '../assets/logo.png'
import FooterListitem from '../components/FooterListitem'

const Footer = () => {
    return (
        <footer className='pt-150'>
            <Container>
                <Flex className="!block md:!flex px-4 md:px-0">
                    <div className='md:w-4/12'>
                        <Image src={logo} />
                        <SubHeading className="w-[356px] pt-[30px]" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." />
                    </div>
                    <div className='md:w-2/12 pt-10 md:pt-0'>
                        <strong className='text-xl text-third font-inter font-semibold'>About</strong>
                        <ul className='flex flex-col gap-y-5 mt-10'>
                            <FooterListitem text="About Us" />
                            <FooterListitem text="Features" />
                            <FooterListitem text="News" />
                            <FooterListitem text="Careers" />

                        </ul>
                    </div>
                    <div className='md:w-2/12 pt-10 md:pt-0'>
                        <strong className='text-xl text-third font-inter font-semibold'>Company</strong>
                        <ul className='flex flex-col gap-y-5 mt-10'>
                            <FooterListitem text="Our Team" />
                            <FooterListitem text="Partner With Us" />
                            <FooterListitem text="FAQ" />
                            <FooterListitem text="Blog" />

                        </ul>
                    </div>
                    <div className='md:w-2/12 pt-10 md:pt-0'>
                        <strong className='text-xl text-third font-inter font-semibold'>Support</strong>
                        <ul className='flex flex-col gap-y-5 mt-10'>
                            <FooterListitem text="About" />
                            <FooterListitem text="Support Center" />
                            <FooterListitem text="Feedback" />
                            <FooterListitem text="Contact Us" />
                            <FooterListitem text="Accesbility" />

                        </ul>
                    </div>
                    <div className='md:w-2/12 pt-10 md:pt-0'>
                        <strong className='text-xl text-third font-inter font-semibold'>Get in touch</strong>
                        <ul className='flex flex-col gap-y-5 mt-10'>
                            <FooterListitem text="info@gmail.com" />
                            <FooterListitem text="+88 0121 0212" />
                            

                        </ul>
                    </div>

                </Flex>

                <div className='border-t border-[#E8E8E8] mt-[50px] pt-5 pb-[46px] '>
                    <p className='text-center text-[#D0D0D0] text-base font-inter font-normal'>All credit goes to @agence.com</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer