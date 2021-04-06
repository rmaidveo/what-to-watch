import React, {useEffect, useRef} from 'react';
import {videoPlayerPropTypes} from '../../prop-types';

const VideoPlayer = ({isPlaying, preview, src}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = null;
    videoRef.current.src = src;
  }, [isPlaying]);

  return (
    <>
      <div className="small-movie-card__image">
        <video ref={videoRef} src={src} poster={preview} width='280px' height='175px' controls="controls"/>
      </div>
    </>
  );
};

VideoPlayer.propTypes = videoPlayerPropTypes;
export default VideoPlayer;
