import React, { Component } from 'react';
import Movie from '../movie/Movie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m4 xl4 ">
          <Movie
            movieTitle="കമ്മാര സംഭവം"
            moviePoster="https://image.tmdb.org/t/p/w300_and_h450_bestv2/fLV91pC3ngxVgllY0fmlDmW0kcM.jpg"
            movieUrl="https://www.themoviedb.org/movie/459722"
            movieReleaseDate="2018-04-14"
          />
        </div>
        <div className="col s12 m4 xl4 ">
          <Movie
            movieTitle="2.0"
            moviePoster="https://image.tmdb.org/t/p/w300_and_h450_bestv2/f0ZDqZDfRNYpyr2OD7PS6UceM0K.jpg"
            movieUrl="https://www.themoviedb.org/movie/373449"
            movieReleaseDate="2018-04-25"
          />
        </div>
        <div className="col s12 m4 xl4 ">
          <Movie
            movieTitle="Oru Adaar Love"
            moviePoster="https://image.tmdb.org/t/p/w300_and_h450_bestv2/zH68gJ9qMNErMlM6zPHzQFbFZR5.jpg"
            movieUrl="https://www.themoviedb.org/movie/505432"
            movieReleaseDate="2018-06-14"
          />
        </div>
      </div>
    );
  }
}
export default Home;
