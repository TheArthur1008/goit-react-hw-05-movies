import { HomePage } from 'pages/Loyaut/Home';
import { MoviesPage } from 'pages/Loyaut/Movies';
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
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":moviesId" element={<MoviesPage />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};
