import { MoviesList } from 'components/Movies/MoviesList';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const fetchMovie = useCallback(async () => {
    if (!query) {
      return;
    }
    const response = await searchMoviesByName(query);
    setMovies(response);
  }, [query]);

  const handleSubmit = element => {
    element.preventDefault();
    setSearchParams({ query: searchQuery });
  };
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie, query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={element => setSearchQuery(element.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
