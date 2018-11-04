// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleBitrateClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  handleClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      })
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.handleClick}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
