import React, {useEffect, useRef, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {playerPagePropTypes} from '../../prop-types';
import LoadingPage from '../loading-page/loading-page';
import {fetchFilmById} from '../../store/api-actions';
import {geTimeInPlayer} from '../../utils/films';
import {getActiveFilm} from '../../store/films/selectors';
import NotFoundPage from '../not-found-page/not-found-page';

const PlayerPage = (props) => {
  const {onExitButtonClick, onLoadFilmById, id} = props;
  const activeFilm = useSelector(getActiveFilm(Number(id)));
  const [playerState, setPlayerState] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(`00:00:00`);
  const fullVideoRef = useRef(``);
  if (activeFilm === null) {
    return (<NotFoundPage/>);
  }
  useEffect(() => {
    if (!playerState) {
      onLoadFilmById(activeFilm.id);
      setPlayerState(true);
    }
  }, [activeFilm]);

  if (!playerState) {
    return (
      <LoadingPage/>
    );
  }
  const playPlayer = () => {
    setIsPlaying(true);
    fullVideoRef.current.play();
  };

  const pausePlayer = () => {
    setIsPlaying(false);
    fullVideoRef.current.pause();
  };

  const fullScreenPlayer = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(false);
      }
    }
  };

  const getTimeProgress = () => {
    setProgressBar((fullVideoRef.current.currentTime / fullVideoRef.current.duration) * 100);
    setTimeElapsed(geTimeInPlayer((fullVideoRef.current.duration - fullVideoRef.current.currentTime)));
  };

  return (
    <>
      <div className="player">
        <video onTimeUpdate={getTimeProgress} ref={fullVideoRef} src={activeFilm.videoLink} className="player__video" poster={activeFilm.imageSrc}></video>
        <button onClick={() => {
          onExitButtonClick();
          if (fullScreen) {
            document.exitFullscreen();
            setFullScreen(false);
          }
        }} type="button" className="player__exit">Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressBar} max="100"></progress>
              <div className="player__toggler" style={{left: `${progressBar}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeElapsed}</div>
          </div>

          <div className="player__controls-row">
            {!isPlaying && <button
              type="button"
              className="player__play"
              onClick={() => playPlayer()}>
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>}
            {isPlaying && <button
              type="button"
              className="player__play"
              onClick={() => pausePlayer()} >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>}
            <div className="player__name">Transpotting</div>
            <button onClick={()=>fullScreenPlayer()} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
PlayerPage.propTypes = playerPagePropTypes;
const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchFilmById(id));
  },

});
export {PlayerPage};
export default connect(null, mapDispatchToProps)(PlayerPage);
