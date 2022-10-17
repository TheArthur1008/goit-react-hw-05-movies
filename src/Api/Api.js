import axios from 'axios';

const trandingMovie = 'trending/movie/day';

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
export const moviesFetch = async () => {
  const response = await movieApi.get(trandingMovie, {
    params: { api_key: 'f9515d5c748130764d8b19c2d2137bc3' },
  });
  return response.data.results;
};
