import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {addFilmInUserList} from '../../store/api-actions';
import {getFavoriteStatusById} from '../../store/films/selectors';


const AddInList = ({id, onAddUserListСlick}) => {
  const isFavorite = useSelector(getFavoriteStatusById(id));
  const [inList, setInlist] = useState(isFavorite);

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={() => {
      onAddUserListСlick(id, inList);
      setInlist(!inList);
    }}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={inList ? `#in-list` : `#add`} />
      </svg>
      <span>My list</span>
    </button>
  );
};

AddInList.propTypes = {
  id: PropTypes.number.isRequired,
  onAddUserListСlick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onAddUserListСlick(id, isFavorite) {
    dispatch(addFilmInUserList(id, isFavorite));
  }
});

export {AddInList};
export default connect(null, mapDispatchToProps)(AddInList);
