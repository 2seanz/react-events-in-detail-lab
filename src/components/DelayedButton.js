// Code DelayedButton Component Here
import React, { Component } from 'react' 

export default class DelayedButton extends Component {

    handleBut = (e) => {
        this.props.onDelayedClick
        }

    handleDelay = (e) => {
        this.props.delay
    }


    render() {
        return(
            <button
            onClick ={this.handleBut.setTimeout(this.handleDelay)}
            ></button>
        )
    }
}