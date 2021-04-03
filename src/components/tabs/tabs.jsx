import React, {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../prop-types';
import {TabsTypes} from '../../consts';

const Tabs = ({film}) => {
  const [activeTab, setActiveTab] = useState(TabsTypes.OVERVIEW);

  const getActiveTab = (tab) => {
    switch (tab) {
      case TabsTypes.OVERVIEW: return <FilmOverview film={film} />;
      case TabsTypes.DETAILS: return <FilmDetails film={film} />;
      case TabsTypes.REVIEWS: return <FilmReviews film={film} />;
      default: return <FilmOverview film={film}> </FilmOverview>;
    }

  };
  return <>
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsTypes).map((tab, id) => {
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
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default Tabs;
