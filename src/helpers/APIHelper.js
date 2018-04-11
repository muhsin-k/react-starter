import axios from 'axios';
import constants from '../config/constants';

axios.defaults.baseURL = constants.TMDB_BASE_URL;

// axios.interceptors.request.use(config => transformRequest(config), error =>
// Promise.reject(error));

export const trendingMovies = () => {
  const requestUrl = `${constants.TMDB_BASE_URL}popular?api_key=${
    constants.TMDB_TOKEN
  }&language=en-US&page=1&region=India`;
  return axios.get(requestUrl);
};
export const updateStop = (url, stopId, requestObj) => {
  const requestUrl = `${constants.TMDB_BASE_URL}stops/${stopId}`;
  return axios.put(requestUrl, requestObj);
};
