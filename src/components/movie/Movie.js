import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  const { moviePoster, movieTitle, movieReleaseDate, movieUrl } = props;

  return (
    <div className="card small">
      <div className="card-image waves-effect waves-block waves-light">
        <img alt="movie-poster" className="activator" src={moviePoster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {movieTitle}
          <i className="material-icons right">{movieReleaseDate}</i>
        </span>
        <p>
          <a target="_blank" href={movieUrl}>
            More Info
          </a>
        </p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  movieTitle: PropTypes.string,
  moviePoster: PropTypes.string,
  movieUrl: PropTypes.string,
  movieReleaseDate: PropTypes.string,
};
Movie.defaultProps = {
  movieTitle: 'No Title',
  moviePoster:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fLV91pC3ngxVgllY0fmlDmW0kcM.jpgo',
  movieUrl: 'hhttps://www.themoviedb.org/movie',
  movieReleaseDate: '2018-04-14',
};

export default Movie;
