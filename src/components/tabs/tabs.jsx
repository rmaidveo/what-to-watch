import React, {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';
import PropTypes from 'prop-types';
import {filmPropTypes, reviewPropTypes} from '../../prop-types';

const TYPES_TABS = [`Overview`, `Details`, `Reviews`];

const Tabs = ({film, reviews}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getActiveTab = (tab) => {
    switch (tab) {
      case `Overview`: return <FilmOverview film={film} />;
      case `Details`: return <FilmDetails film={film} />;
      case `Reviews`: return <FilmReviews reviews={reviews} />;
      default: return <FilmOverview film={film}> </FilmOverview>;
    }

  };
  return <>
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TYPES_TABS.map((tab, id) => {
            return (
              <li key={tab + id} className={tab === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a href="#" className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setActiveTab(evt.target.text);
                  }}>
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {getActiveTab(activeTab)}
    </div>
  </>;
};
Tabs.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  )
};

export default Tabs;
