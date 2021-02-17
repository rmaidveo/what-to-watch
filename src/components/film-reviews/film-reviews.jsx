import React from 'react';
import {dataPropTypes} from '../../prop-types';

const FilmReviews = (props) => {
  const {reviews} = props;
  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review) =>
            <>
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{review.rating}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

FilmReviews.propTypes = dataPropTypes;
export default FilmReviews;
