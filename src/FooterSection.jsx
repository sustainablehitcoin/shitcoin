import React from 'react'
import CommunityFooterItem from './FooterItem.jsx'
import './FooterSection.css'
const FooterSection = ({title, items}) => {


    return (
        <div className="wrapper-div">
            <h3>
                {title}
            </h3>
            <ul>
                {items}
            </ul>
        </div>
    )

}

export default FooterSection