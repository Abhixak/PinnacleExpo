import React from 'react';
import adVideo from "../assets/AdVideo01.mp4";

const AdVideo01 = () => {
  return (
    <div className="w-[full] !my-4 h-auto">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src={adVideo} type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default AdVideo01;
