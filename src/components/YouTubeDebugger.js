import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeBitrate = () => {
        this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})
    }

    changeResolution = () => {
        this.setState({settings: Object.assign({}, this.state.settings, {
            video: Object.assign({}, this.state.settings.video, {
                resolution: '720p'
            })
        })})
    }

    render() {
        return(

            <React.Fragment>
            <button className='bitrate' onClick={this.changeBitrate}>Bitrate is {this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.changeResolution}>Resolution{this.state.settings.video.resolution}</button>
            </React.Fragment>
        )
    }

}

export default YouTubeDebugger