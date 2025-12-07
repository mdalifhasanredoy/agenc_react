import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ServiceCard from '../components/ServiceCard'
import Flex from '../components/Flex'
import serviceone from '../assets/serviceone.png'
import servicetwo from '../assets/servicetwo.png'
import servicethree from '../assets/servicethree.png'
import servicefour from '../assets/servicefour.png'
import servicefive from '../assets/servicefive.png'
import servicesix from '../assets/servicesix.png'

const Service = () => {
    return (
        <section className='pb-[103px]'>
            <Container>
                <Heading text="Our Provided Services" className="text-center" />
                <SubHeading text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-center w-[590px] mx-auto pt-5 leading-[26px]" />
                <Flex className='flex-wrap gap-6 pt-[50px]'>
                    <ServiceCard image={serviceone} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                    <ServiceCard image={servicetwo} title="UI/UX Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                    <ServiceCard image={servicethree} title="Web Development" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                    <ServiceCard image={servicefour} title="Motion Graphics" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                    <ServiceCard image={servicefive} title="3D Animation" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                    <ServiceCard image={servicesix} title="Digital Marketing" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." />
                </Flex>
            </Container>
        </section>
    )
}

export default Service