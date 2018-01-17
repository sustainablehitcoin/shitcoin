import React from 'react'
import './NavItem.css'

export const NavItem = ({text, url}) => {
    return (
        <a href={url} style={{fontFamily: 'Rubik', fontSize: '1.5em', textDecoration: 'none', color: 'white'}}>{text}</a>
    )
}