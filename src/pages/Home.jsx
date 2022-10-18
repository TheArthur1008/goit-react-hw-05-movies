import { moviesFetch } from 'Api/Api';
import { MoviesList } from 'components/Movies/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

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
      <MoviesList movies={trendingFilms} from={location.pathname} />
    </div>
  );
};

export default Home;
