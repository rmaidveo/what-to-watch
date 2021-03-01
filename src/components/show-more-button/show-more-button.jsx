import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {

  return (
    <>
      <div className="catalog__more" onClick={props.onButtonClick}>
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};

ShowMoreButton.propTypes = PropTypes.func.isRequired;

export default ShowMoreButton;
