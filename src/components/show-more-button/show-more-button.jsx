import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = ({onButtonClick}) => {

  return (
    <>
      <div className="catalog__more" data-testid="show-more" onClick={onButtonClick}>
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};

ShowMoreButton.propTypes = PropTypes.func.isRequired;

export default ShowMoreButton;
