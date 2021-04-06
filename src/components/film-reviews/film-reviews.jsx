import React, {useEffect, useState} from 'react';
import {filmReviewsPropTypes} from '../../prop-types';
import dayjs from 'dayjs';
import {connect} from 'react-redux';
import {fetchCommentsOnFilmByID} from '../../store/api-actions';
import {getReviewsList} from '../../store/films/selectors';

const FilmReviews = (props) => {
  const {film, reviews, getReviews} = props;
  const [reviewsLoading, setReviewsLoading] = useState(false);

  useEffect(() => {
    if (!reviewsLoading) {
      setReviewsLoading(true);
      getReviews(film.id);
    }
  }, [film.id]);

  if (!reviewsLoading) {
    return <p className="movie-card__starring"> Loading comments...</p>;
  }
  if (reviewsLoading && reviews.length === 0) {
    return <p className="movie-card__starring"> No comments for this film </p>;
  }

  const reviewsFirst = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsSecond = reviews.slice(Math.ceil(reviews.length / 2));

  const getReviewColumn = (reviewList) => {
    return (
      <div className="movie-card__reviews-col">
        {reviewList.map((review, index) =>
          <React.Fragment key={`review-${review.id + index}`}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={dayjs(review.date).format(`YY-MM-DD`)}>{dayjs(review.date).format(`MMMM DD, YYYY`)}</time>
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
      <div className="movie-card__reviews movie-card__row" data-testid="review-wrap" >
        {getReviewColumn(reviewsFirst)}
        {getReviewColumn(reviewsSecond)}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  reviews: getReviewsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchCommentsOnFilmByID(id));
  },
});

FilmReviews.propTypes = filmReviewsPropTypes;

export {FilmReviews};

export default connect(mapStateToProps, mapDispatchToProps)(FilmReviews);
