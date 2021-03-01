import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import {dataPropTypes} from '../../prop-types';
import PropTypes from 'prop-types';
import FormReview from '../form-review/form-review';

const AddReviewPage = (props) => {
  const {films, onPostReview} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));
  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`/films/${film.id}`}> {film.name}</Link>
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
            <img src={film.imageSrc} alt={film.name} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <FormReview onPostReview={onPostReview}> </FormReview>
        </div>
      </section>
    </>
  );
};

AddReviewPage.propTypes = {
  films: dataPropTypes,
  match: PropTypes.object,
  onPostReview: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  films: state.films
});

export {AddReviewPage};
export default connect(mapStateToProps, null)(AddReviewPage);
