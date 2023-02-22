import React from 'react';

const Video = () => {
  return (
    <div className="flex justify-center px-2 py-6">
      <iframe
        width="1200"
        height="515"
        src="https://www.youtube.com/embed/uYJQIKAVBw8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
