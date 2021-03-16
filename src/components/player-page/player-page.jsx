import React from 'react';
import {connect} from 'react-redux';
import {dataPropTypes} from '../../prop-types';
import {useParams} from 'react-router-dom';
import {getFilms} from '../../store/films/selectors';

const PlayerPage = (props) => {
  const {films, onExitButtonClick} = props;
  const id = parseInt(useParams().id, 10);
  const film = films.find((item) => item.id === parseInt(id, 10));
  return (
    <>
      <div className="player">
        <video src="#" className="player__video" poster={film.imageSrc}></video>
        <button onClick={() => onExitButtonClick()} type="button" className="player__exit">Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{film.runTime + ` m`}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
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
PlayerPage.propTypes = dataPropTypes;

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

export {PlayerPage};
export default connect(mapStateToProps, null)(PlayerPage);
