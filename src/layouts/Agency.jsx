import React from 'react'

import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import AgencyCard from '../components/AgencyCard'
import agencyone from '../assets/agencyone.png'
import agencytwo from '../assets/agencytwo.png'
import agencythree from '../assets/agencythree.png'
import agencyimg from '../assets/agencyimg.png'
import Image from '../components/Image'


const Agency = () => {
    return (
        <section className='pb-[150px] pt-[150px]'>
            <Container>
                <Flex className="items-end">
                    <div className='w-7/12'>
                        <Heading className="w-[508px]" text="Why You Should Choose Agenc" />

                        <SubHeading className="w-[480px] pt-5 pb-[85px] leading-[26px]" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />

                        <Flex>
                            <AgencyCard image={agencyone} title="Innovative Ideas" text="Because each project is different, we adapt to your business model." />
                            <AgencyCard className="mt-10" image={agencytwo} title="Dedicated Support" text="We provide 24/7 support for all our clients and serve them professionally." />
                        </Flex>
                        <div className='ml-[200px] mt-[50px]'>
                            <AgencyCard image={agencythree} title="Honest Pricing" text="Pricing on projects are based on various analyzes and are cost effective." />
                        </div>
                    </div>
                    <div className='w-5/12 '>
                        <Image src={agencyimg} />
                    </div>
                </Flex>

            </Container>
        </section>
    )
}

export default Agency