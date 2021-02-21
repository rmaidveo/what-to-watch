import React, {Fragment, useEffect, useRef} from 'react';
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
    <Fragment>
      <div className="small-movie-card__image">
        <video ref={videoRef} muted={true} src={src} poster={preview} width='280px' height='175px'/>
      </div>
    </Fragment>
  );
};

VideoPlayer.propTypes = videoPlayerPropTypes;
export default VideoPlayer;
