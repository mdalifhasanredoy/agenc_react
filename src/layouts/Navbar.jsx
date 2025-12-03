import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Image from '../components/Image'
import Listitem from '../components/Listitem'
import Buttonnav from '../components/Button'


const Navbar = () => {
    return (
        <nav className='py-10'>
            <Container>
                <Flex className='justify-between items-center'>
                    <div>
                        <Image src={logo}/>
                    </div>
                    <div>
                        <ul className='flex gap-12'>
                            <Listitem text="Home"/>
                            <Listitem text="About"/>
                            <Listitem text="Service"/>
                            <Listitem text="Careers"/>
                            <Listitem text="Contact"/>
                        </ul>
                    </div>
                    <div>
                        <Buttonnav text="Contact"/>
                    </div>
                </Flex>
            </Container>

        </nav>

    )
}

export default Navbar