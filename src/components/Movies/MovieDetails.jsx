import { searchMovieById } from 'Api/Api';
import { useEffect, useState, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from './Movies.module.css';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  const from = location.state?.from ?? '/';
  const [movieById, setMovieById] = useState();
  useEffect(() => {
    searchMovieById(moviesId)
      .then(response => {
        setMovieById(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  if (!movieById) {
    return <p className={css.error}>404 Not Found</p>;
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieById;
  return (
    <div className={css.wrapper}>
      <Link to={refLocation.current ?? '/'} className={css.link}>
        Go back
      </Link>
      <div className={css.wrapperTitle}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
          height="400"
        />
        <div className={css.wrapperDescription}>
          <h2>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </div>
      </div>
      <div className={css.wrapper}>
        <div className={css.wrapperTitle}>
          <NavLink to="cast" state={{ from: from }} className={css.link}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: from }} className={css.link}>
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
