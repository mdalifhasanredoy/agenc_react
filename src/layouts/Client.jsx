import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import ClientCard from '../components/ClientCard'
import clientone from '../assets/clientone.png'
import clienttwo from '../assets/clienttwo.png'
import clientthree from '../assets/clientthree.png'

const Client = () => {
    return (

        <section className='py-[100px]'>
            <Container>

                <Heading className="text-center" text="Some Client Reviews" />
                <SubHeading className="w-[620px] text-center mx-auto pt-5" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." />

                <Flex>
                    <ClientCard className="pt-[261px]" profileimg={clientone} title="Eric Drake" text="Digital Marketor" />
                    <ClientCard className="pt-[50px]" profileimg={clienttwo} title="Awlad Hossain" text="UX Researcher" />
                    <ClientCard className="pt-[261px]" profileimg={clientthree} title="Rosa Farmer" text="UI Designer" />
                </Flex>

            </Container>
        </section>
    )
}

export default Client