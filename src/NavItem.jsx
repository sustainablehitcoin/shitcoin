import React from 'react'
import './NavItem.css'

export const NavItem = ({text, url}) => {
    return (
        <a href={url} className="link" >{text}</a>
    )
}