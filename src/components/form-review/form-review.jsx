import React, {useState} from 'react';
import {RATING_STARS, TextArea} from '../../consts';
import {formReviewPropTypes} from '../../prop-types';
import {postCommentOnFilmByID} from '../../store/api-actions';
import {connect} from 'react-redux';

const getLengthValidation = (evt) => {
  let textArea = evt.target;
  let textValue = textArea.value.length;
  if (textValue < TextArea.MIN) {
    textArea.setCustomValidity(`Минимальное количество символов : ${TextArea.MIN}`);
  } else if (textValue > TextArea.MAX) {
    textArea.setCustomValidity(`Максимальное количество символов : ${TextArea.MAX}`);
  } else {
    textArea.setCustomValidity(``);
  }
};

const FormReview = (props) => {
  const {id, color, onPostReview} = props;
  const [isReviewFormDisabled, setIsReviewFormDisabled] = useState(false);
  const [userFormText, setUserFormText] = useState(``);
  const [userFormRating, setUserFormRating] = useState(5);

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    setIsReviewFormDisabled(true);
    onPostReview(id, userFormRating, userFormText);
  };

  const handleReviewTextChange = (evt) => {
    const {value} = evt.target;
    getLengthValidation(evt);
    setUserFormText(value);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {new Array(RATING_STARS).fill().map((_, rating) => (
            <React.Fragment key={`rating-${rating}`}>
              <input className="rating__input" id={`star-${rating + 1}`} type="radio" name="rating" value={rating + 1} disabled={isReviewFormDisabled}
                checked={userFormRating === rating + 1}
                onChange={() => {
                  setUserFormRating(rating + 1);
                }}/>
              <label className="rating__label" htmlFor={`star-${rating + 1 }`}>Rating {rating + 1}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{backgroundColor: color, filter: `brightness(110%)`}} className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userFormText} onChange={handleReviewTextChange} disabled={isReviewFormDisabled} required>{userFormText}</textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isReviewFormDisabled}>Post</button>
        </div>
      </div>
    </form>
  );
};

FormReview.propTypes = formReviewPropTypes;
const mapDispatchToProps = (dispatch) => ({
  onPostReview(id, rating, comment) {
    dispatch(postCommentOnFilmByID(id, rating, comment));
  }
});
export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
