import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'

function Navbar(){
    return (
        <nav>

            <Logo/>
            <Search/>
            <Button>Give FeedBack</Button>

        </nav>

    )
}


export default Navbar