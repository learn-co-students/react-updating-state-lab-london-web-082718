import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return(
        <button onClick={this.handleClick}>Clicked {this.state.timesClicked} times</button>
        )
    }


}

export default DigitalClicker
