import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }

  const vidoeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe className="videoPlayer" src={vidoeSrc} />
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
