import { searchMovieByCast } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    searchMovieByCast(moviesId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  return (
    <ul className={css.list}>
      {cast &&
        cast.map(({ character, profile_path, name, id }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="100"
                height="150"
              />
            )}
            <div className={css.description}>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
