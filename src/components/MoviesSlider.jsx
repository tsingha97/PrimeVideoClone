import MovieItem from "./MovieItem";

const MoviesSlider = ({ details }) => {
  // This component is used to render a single movie item
  // It expects a details object as a prop
  // The details object should contain the relevant information about the movie
  // This component is used in the PrimeVideo.jsx component
  // to render a list of movies horizontally

  // The component wraps the MovieItem component
  // in a div with the class 'px-1'
  // This is done to add some padding to the left and right
  // of the movie item

  return (
    <div className="px-1">
      <MovieItem details={details} />
    </div>
  );
};

export default MoviesSlider;
