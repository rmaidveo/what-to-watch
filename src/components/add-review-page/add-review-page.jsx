import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import FormReview from '../form-review/form-review';
import {fetchFilmById} from '../../store/api-actions';
import {addReviewPagePropTypes} from '../../prop-types';
import {getActiveFilm} from '../../store/films/selectors';

const AddReviewPage = (props) => {
  const {activeFilm, onLoadFilmById, onPostReview} = props;

  useEffect(() => {
    onLoadFilmById(activeFilm.id);
  }, [activeFilm.id]);

  return (
    <>
      <section style={{backgroundColor: activeFilm.backgroundColor}} className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`/films/${activeFilm.id}`}> {activeFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={activeFilm.imageSrc} alt={activeFilm.name} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <FormReview onPostReview={onPostReview} id={activeFilm.id} color={activeFilm.backgroundColor}> </FormReview>
        </div>
      </section>
    </>
  );
};

AddReviewPage.propTypes = addReviewPagePropTypes;

const mapStateToProps = (state, ownProps) => ({
  activeFilm: getActiveFilm(state, parseInt(ownProps.match.params.id, 10)),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchFilmById(id));
  }
});
export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
