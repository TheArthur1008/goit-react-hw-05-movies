import { MoviesList } from 'components/Movies/MoviesList';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';
import css from 'pages/Pages.module.css';

const Movies = () => {
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
    <div className={css.wrapperTitle}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={element => setSearchQuery(element.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
