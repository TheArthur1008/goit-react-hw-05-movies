import { MoviesList } from 'components/Movies/MoviesList';
import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <div>
      <MoviesList />
      <Outlet />
    </div>
  );
};
