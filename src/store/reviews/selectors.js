import {NameSpace} from '../root-reducer';

export const getCommentsOnActiveFilm = (state) => state[NameSpace.REVIEWS].commentsOnActiveFilm;
export const getSendingComment = (state) => state[NameSpace.REVIEWS].sendingComment;
export const getReviewFormDisabled = (state) => state[NameSpace.REVIEWS].isReviewFormDisabled;
