import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ContactInput from '../components/ContactInput'
import Button from '../components/Button'

const Contact = () => {
    return (
        <section className='bg-[#F3F3F3] py-150'>
            <Container>
                <Flex className="items-center">
                    <div className='w-1/2'>
                        <Heading className="w-[450px] pb-5 " text="We Do design, Code & Development" />
                        <SubHeading className="w-[514px] leading-[26px]" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." />

                        <SubHeading className="w-[514px] leading-[26px] pt-2.5 " text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." />

                    </div>
                    <div className='w-1/2'>
                    <div className='w-[536px] py-[61px] px-[43px] bg-white rounded-[20px]'>
                        <h4 className=' text-[30px] text-third font-bold font-inter text-center mb-[30px] '>Get a free quote now</h4>
                      <ContactInput text='Name' place='Enter your name'/>
                      <ContactInput text='Email' place='Enter your email'/>
                      <ContactInput text='Phone' place='Enter your phone number'/>
                      
                       <Button className="w-full mt-[29px]" text='Get Pricing Now'/>
                    </div>
                    
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Contact