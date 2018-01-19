import React from 'react'
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