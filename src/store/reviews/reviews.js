import {loadComments, postComment, setReviewFormDisabled} from '../actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  commentsOnActiveFilm: [],
  sendingComment: {},
  isReviewFormDisabled: false,
};

const reviews = createReducer(initialState, (builder) => {
  builder.addCase(loadComments, (state, action) => {
    state.commentsOnActiveFilm = action.payload;
  });
  builder.addCase(postComment, (state, action) => {
    state.sendingComment = action.payload;
  });
  builder.addCase(setReviewFormDisabled, (state, action) => {
    state.isReviewFormDisabled = action.payload;
  });
});
export {reviews};
