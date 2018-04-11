import React, { Component } from 'react';
import Movie from '../movie/Movie';
import { trendingMovies } from '../../helpers/APIHelper';
import constants from '../../config/constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    trendingMovies()
      .then(result => this.getAllMovies(result.data.results))
      .catch(() => {});
  }
  getAllMovies(movies) {
    this.setState({
      movies,
    });
  }
  render() {
    return (
      <div className="row">
        {this.state.movies.map(movie => (
          <div className="col s12 m3 xl3 " key={movie.id}>
            <Movie
              movieTitle={movie.title}
              moviePoster={`${constants.TMDB_IMAGE_URL}${movie.poster_path}`}
              movieUrl={`${constants.TMDB_URL}${movie.id}`}
              movieReleaseDate={movie.release_date}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
