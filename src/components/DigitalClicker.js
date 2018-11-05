// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = {
        timesClicked : 0
    }

    handleClick = () =>{
        this.setState({
            timesClicked:  this.state.timesClicked + 1
          })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
                <p>{this.state.timesClicked} time{this.state.timesClicked > 1 ? "s" : null} clicked!</p>
            </div>
        )
    }
};

export default DigitalClicker;