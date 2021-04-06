import {RatingScale, RatingTitle, TIME} from '../consts';

export const getRating = (rating) => {
  let result = ``;
  if (rating <= RatingScale.MIN) {
    result = RatingTitle.BAD;
  }
  if (rating > RatingScale.MIN && rating <= RatingScale.NORMAL) {
    result = RatingTitle.NORMAL;
  }
  if (rating > RatingScale.NORMAL && rating <= RatingScale.GOOD) {
    result = RatingTitle.GOOD;
  }
  if (rating > RatingScale.GOOD && rating < RatingScale.AWESOME) {
    result = RatingTitle.VERY_GOOD;
  }
  if (rating === RatingScale.AWESOME) {
    result = RatingTitle.AWESOME;
  }
  return result;
};


export const getRunTime = (time) => {
  let h = Math.floor(time / 60);
  let min = time % 60;
  return min !== 0 ? `${h}h ${min}m` : `${h}h`;
};

export const geTimeInPlayer = (seconds) => {
  let time = Math.floor(seconds / TIME);
  let h = Math.floor(time / TIME);
  let min = time % TIME;
  let sec = Math.floor((seconds - (time * TIME) - (h * TIME) - min) % TIME);
  return `${h}:${min}:${sec}`;
};
