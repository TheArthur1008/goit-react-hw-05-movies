import { Link } from 'react-router-dom';
import css from './Movies.module.css';
export const MoviesList = ({ movies, from }) => {
  return (
    <ul className={css.list}>
      {movies &&
        movies.map(({ id, name, title, poster_path }) => (
          <li key={id} className={css.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: from }}
              className={css.link}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width="150"
                height="200"
              />
              <span className={css.description}>{name || title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};
