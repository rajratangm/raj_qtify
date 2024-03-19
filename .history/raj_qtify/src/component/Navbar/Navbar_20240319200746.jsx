import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import styles from ''
function Navbar(){
    return (
        <nav>
            <a href='/'>
            <Logo/>
            </a>

            
            <Search placeholder="Search your favorite albumn here"/>
            <Button>Give FeedBack</Button>

        </nav>

    )
}


export default Navbar