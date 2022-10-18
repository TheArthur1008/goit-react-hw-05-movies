import { Cast } from 'components/Cast/Cast';
import { MovieDetails } from 'components/Movies/MovieDetails';
import { Reviews } from 'components/Reviews/Reviews';
import { HomePage } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
