import { Link } from 'react-router-dom';
export const MoviesList = ({ movies, from }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, name, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: from }}>
              {name || title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
