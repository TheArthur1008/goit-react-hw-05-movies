import { Link } from 'react-router-dom';
export const MoviesList = () => {
  return (
    <div>
      <h1>Movie</h1>
      {/* <img src="#" alt="image" /> */}
      <p>description</p>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
    </div>
  );
};
