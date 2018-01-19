import React from 'react'
import './FooterItem.css'

class SignUpFooterItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMessage: false
        }
    }

    signUpHandler = (e) => {
        this.setState({
            showMessage: true
        })
    }

    render = () => (
        <div>
            <li className="footer-item">
                {this.props.children}
                {this.state.showMessage
                    ? <span>{this.props.message}</span>
                    : <button onClick={this.signUpHandler}>Sign Up</button>
                }
            </li>
        </div>
    )
    
}

export default SignUpFooterItem