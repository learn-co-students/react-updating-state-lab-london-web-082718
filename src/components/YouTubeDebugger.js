// Code YouTubeDebugger Component Here
import React from 'react';

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

    handleClickSettingsBitrate = () =>{
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: this.state.settings.bitrate + 4
            })
        })
    }

    handleClickSettingsResolution = () =>{
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
    }

    render(){
        return (
            <div>
                <button className='bitrate' onClick={this.handleClickSettingsBitrate}>bitrate</button>
                <button className='resolution'onClick={this.handleClickSettingsResolution}>resolution</button>
            </div>
        )
    }
};

export default YouTubeDebugger;