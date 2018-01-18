import React from 'react'
import { NavItem } from './NavItem';

const NavBar = () => {
        return ( 
           <header className="App-header">
           <div className="nav-item-container">
                <NavItem text='Home' url='bla.com'></NavItem>
                <NavItem text='Whitepaper' url='#'></NavItem>
                <NavItem text='Team' url='#'></NavItem>
           </div>
           </header>
        )
}

export default NavBar