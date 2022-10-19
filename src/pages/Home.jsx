import { useState, useEffect } from 'react';
import { moviesFetch } from 'Api/Api';
import { MoviesList } from 'components/Movies/MoviesList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    moviesFetch()
      .then(response => {
        setTrendingFilms(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  if (!trendingFilms) {
    return <p>404 Not Found</p>;
  }

  return (
    <div>
      <MoviesList movies={trendingFilms} />
    </div>
  );
};

export default Home;
