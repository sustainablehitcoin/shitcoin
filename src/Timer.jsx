import React from 'react'

import './Timer.css'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.startDate = new Date('2018-06-17T00:00:00')
        this.state = {
            timerValue: this.calculateTimerDisplay(this.startDate - new Date()).join(':')
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.one_second
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        var now = new Date()
            , elapsed = this.startDate - now

        let displayParts = this.calculateTimerDisplay(elapsed)
        
        this.setState({
            timerValue: displayParts.join(':')
        })
    }

    calculateTimerDisplay(elapsed) {
        let one_second = 1000
        let one_minute = one_second * 60
        let one_hour = one_minute * 60
        let one_day = one_hour * 24

        var parts = []
        parts[0] = '' + Math.floor( elapsed / one_day );
        parts[1] = '' + Math.floor( (elapsed % one_day) / one_hour );
        parts[2] = '' + Math.floor( ((elapsed % one_day) % one_hour) / one_minute );
        parts[3] = '' + Math.floor( ( ((elapsed % one_day) % one_hour) % one_minute ) / one_second );
        
        parts[0] = (parts[0].length === 1) ? '0' + parts[0] : parts[0];
        parts[1] = (parts[1].length === 1) ? '0' + parts[1] : parts[1];
        parts[2] = (parts[2].length === 1) ? '0' + parts[2] : parts[2];
        parts[3] = (parts[3].length === 1) ? '0' + parts[3] : parts[3];

        return parts
    }

    render() {
        return (
            <div>
                <div className="timer-title">Current distribution level ends in</div>
                <div className="timer-value">{this.state.timerValue}</div>
            </div>
            
        )


    }
}

export default Timer