import React from "react";
import SearchInput from "./SearchInput";
import YouTube from "../API/YouTube";
import Videos from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { vid: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("beagle");
  }

  onTermSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      vid: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchInput onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <Videos
                onVideoSelect={this.onVideoSelect}
                videos={this.state.vid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
