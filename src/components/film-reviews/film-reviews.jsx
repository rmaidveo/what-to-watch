import React from 'react';
import {dataPropTypes} from '../../prop-types';

const FilmReviews = (props) => {
  const {reviews} = props;
  const reviewsFirst = reviews.slice(0, reviews.length / 2);
  const reviewsSecond = reviews.slice(reviews.length / 2);

  const getReviewColumn = (reviewList) => {
    return (
      <div className="movie-card__reviews-col">
        {reviewList.map((review, index) =>
          <React.Fragment key={review.id + index}>
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
          </React.Fragment>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {getReviewColumn(reviewsFirst)}
        {getReviewColumn(reviewsSecond)}
      </div>
    </>
  );
};

FilmReviews.propTypes = {
  reviews: dataPropTypes
};
export default FilmReviews;
