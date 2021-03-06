import React from 'react'
import './FooterItem.css'

export const CommunityFooterItem = (props) => {

    return (
            <li className="footer-item footer-item--link">
                <a href={props.link} style={{display: 'flex', margin: '0 5px', alignItems: 'center'}}>
                    {props.children}
                    <span style={{marginLeft: '10px'}}>{props.title}</span>
                </a>
            </li>
    )
}

export const SignUpFooterItem = (props) => {
    return (
            <li className="footer-item">
                {props.children}
            </li>

    )
}