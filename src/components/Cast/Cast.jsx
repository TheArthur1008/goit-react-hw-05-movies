import { searchMovieByCast } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import image from 'images/ukraine.jpeg';

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
          <li key={id} className={css.item}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="140"
                height="175"
              />
            ) : (
              <img src={image} alt={name} width="140" height="175" />
            )}
            <div className={css.description}>
              <h3>{name}</h3>
              <h4>Character: </h4>
              <p>{character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
