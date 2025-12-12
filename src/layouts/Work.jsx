import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Listitem from '../components/Listitem'
import WorkCard from '../components/WorkCard'
import workone from '../assets/workone.png'
import worktwo from '../assets/worktwo.png'
import workthree from '../assets/workthree.png'
import workfour from '../assets/workfour.png'
import workfive from '../assets/workfive.png'
import worksix from '../assets/worksix.png'
import Flex from '../components/Flex'

const Work = () => {
  return (
    <section className="bg-[#F3F3F3]  pt-[150px] pb-[150px]">
        <Container>
              <Heading text="Our Recent Work" className="text-center"/>
            <SubHeading text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-center w-[653px] mx-auto p-6"/>

            <ul className='flex gap-[154px] pb-[50px]'>
                <Listitem text="All"/>
                <Listitem text="Mobile Design"/>
                <Listitem text="Web design"/>
                <Listitem text="Branding"/>
                <Listitem text="Illustration"/>
                <Listitem text="Digital Marketing"/>
            </ul>

            <Flex className="flex-wrap gap-6">
                <WorkCard image={workone} title="Task Management App" text="This is a task management application that can help you be more "/>
                <WorkCard image={worktwo} title="Saas Landing Page Design" text="This is a task management application that can help you be more "/>
                <WorkCard image={workthree} title="App Design" text="This is a task management application that can help you be more "/>
                <WorkCard image={workfour} title="Landing Page Design" text="This is a task management application that can help you be more "/>
                <WorkCard image={workfive} title="Dashboard Design" text="This is a task management application that can help you be more "/>
                <WorkCard image={worksix} title="Web App Design" text="This is a task management application that can help you be more "/>
            </Flex>
        </Container>
    </section>
  )
}

export default Work