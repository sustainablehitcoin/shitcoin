import React from 'react'
import './Footer.css'
import FooterSection from './FooterSection.jsx'
import CommunityFooterItem  from './CommunityFooterItem';
import SignUpFooterItem  from './SignUpFooterItem';
import reddit from './icons/reddit.png'
import facebook from './icons/facebook.svg'
import telegram from './icons/telegram.png'
import twitter from './icons/twitter.svg'
import github from './icons/github.svg'

const communityItems = [
    <div>
    <CommunityFooterItem title="GitHub" link="https://github.com/sustainablehitcoin">
        <img src={github} alt='github' width='20px' height='20px'/>
    </CommunityFooterItem>
    <CommunityFooterItem title="Reddit">
        <img src={reddit} alt='reddit' width='20px' height='20px'/>
    </CommunityFooterItem>
    <CommunityFooterItem title="Telegram">
        <img src={telegram} alt='telegram' width='20px' height='20px'/>
    </CommunityFooterItem>
    <CommunityFooterItem title="Twitter">
        <img src={twitter} alt='twitter' width='20px' height='20px'/>
    </CommunityFooterItem>
    <CommunityFooterItem title="Facebook">
        <img src={facebook} alt='facebook' width='20px' height='20px'/>
    </CommunityFooterItem>
    </div>
]

const signupItems = [
    <SignUpFooterItem message="Signing you up for our shitlist 😉">
        <input type="email" placeholder="Email address"/>
    </SignUpFooterItem>
]

const Footer = () => {

    return (
        <div className="footer-container" style={{display: 'flex', backgroundColor: '#222', justifyContent: 'center'}}>
            <FooterSection title="Community" items={communityItems} />
            <FooterSection title="Sign Up" items={signupItems}/>
        </div>
    )
}

export default Footer

