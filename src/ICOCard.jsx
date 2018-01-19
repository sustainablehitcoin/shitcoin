import React from 'react'
import Timer from './Timer.jsx'
import './ICOCard.css'
import logo from './icons/logo.png'

const ICOCard = () => {
    
    return (
        <div id="token-sale" >
            <div className="card-container">
                <div className="card-title">
                    SHIToken Distribution
                </div>
                <div className="coin-logo">
                    <img src={logo} alt="shitcoin-logo" width='20%' height='20%'/>
                </div>
                <div className="card-info-container">
                    <div className="card-info">
                        <div className="coin-info">
                            <div className="coin-info-section coin-rate">
                                <div>
                                    Current Rate
                                </div>
                                <div className="coin-info-value">
                                    10% off
                                </div>
                            </div>
                            <div className="coin-info-section coin-supply">
                                <div>Total number of coins distributed</div>
                                <div className="coin-info-value">10000000</div>
                            </div>
                            <div className="coin-info-section eth-supply">
                                <div>ETH received</div>
                                <div className="coin-info-value">2200000 ($2,394,678,000.00)</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-info">
                        <div className="timer">
                            <Timer />
                        </div>
                    </div>
                    <div></div>

                </div>
            </div>
            <div></div>
        </div>
        
    )
}

export default ICOCard