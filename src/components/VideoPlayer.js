import React from 'react';

const VideoPlayer = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <video width="600" height="400" controls>
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

export default VideoPlayer;
