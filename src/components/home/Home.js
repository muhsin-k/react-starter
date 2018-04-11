import React, { Component } from 'react';
import Movie from '../movie/Movie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          movieTitle: 'കമ്മാര സംഭവം',
          moviePoster:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fLV91pC3ngxVgllY0fmlDmW0kcM.jpg',
          movieUrl: 'https://www.themoviedb.org/movie/459722',
          movieReleaseDate: '2018-04-14',
        },
        {
          movieTitle: '2.0',
          moviePoster:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f0ZDqZDfRNYpyr2OD7PS6UceM0K.jpg',
          movieUrl: 'https://www.themoviedb.org/movie/373449',
          movieReleaseDate: '2018-04-25',
        },
        {
          movieTitle: 'Oru Adaar Love',
          moviePoster:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zH68gJ9qMNErMlM6zPHzQFbFZR5.jpg',
          movieUrl: 'https://www.themoviedb.org/movie/505432',
          movieReleaseDate: '2018-06-14',
        },
        {
          movieTitle: 'Oru Adaar Love',
          moviePoster:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zH68gJ9qMNErMlM6zPHzQFbFZR5.jpg',
          movieUrl: 'https://www.themoviedb.org/movie/505432',
          movieReleaseDate: '2018-06-14',
        },
        {
          movieTitle: 'Oru Adaar Love',
          moviePoster:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zH68gJ9qMNErMlM6zPHzQFbFZR5.jpg',
          movieUrl: 'https://www.themoviedb.org/movie/505432',
          movieReleaseDate: '2018-06-14',
        },
      ],
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.movies.map(movie => (
          <div className="col s12 m3 xl3 ">
            <Movie
              movieTitle={movie.movieTitle}
              moviePoster={movie.moviePoster}
              movieUrl={movie.movieUrl}
              movieReleaseDate={movie.movieReleaseDate}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
