import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../consts';

const FormReview = (props) => {
  const {onPostReview} = props;
  const [userFormText, setUserFormText] = useState(``);
  const [userFormRating, setUserFormRating] = useState(5);

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    onPostReview(userFormRating, userFormText);
  };

  const handleReviewTextChange = (evt) => {
    const {value} = evt.target;
    setUserFormText(value);
  };
  return (
    <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {new Array(RATING_STARS).fill().map((_, rating) => (
            <React.Fragment key={`rating-${rating}`}>
              <input className="rating__input" id={`star-${rating + 1}`} type="radio" name="rating" value={rating + 1}
                checked={userFormRating === rating + 1}
                onChange={() => {
                  setUserFormRating(rating + 1);
                }}/>
              <label className="rating__label" htmlFor={`star-${rating + 1 }`}>Rating {rating + 1}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userFormText} onChange={handleReviewTextChange}>{userFormText}</textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

FormReview.propTypes = {
  onPostReview: PropTypes.func.isRequired
};

export default FormReview;
