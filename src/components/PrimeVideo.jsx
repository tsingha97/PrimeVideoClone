import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { moviesList } from "../data/MovieList";
import MoviesSlider from "./MoviesSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PrimeVideo = () => {
  // Create references for the sliders to access their methods like slickPrev and slickNext
  const sliderRefs = [useRef(null), useRef(null)];

  // State to keep track of the current slide index for each slider
  const [currentIndexes, setCurrentIndexes] = useState([0, 0]);

  // Filter the movies list into categories
  const movieLists = {
    ACTION: moviesList.filter((each) => each.categoryId === "ACTION"),
    COMEDY: moviesList.filter((each) => each.categoryId === "COMEDY"),
  };

  // Function to create slider settings for each index
  const createSettings = (index) => ({
    dots: false, // Disable dots navigation
    slidesToShow: 4, // Number of slides to show simultaneously
    slidesToScroll: 1, // Number of slides to scroll at a time
    infinite: false, // No infinite scrolling
    arrows: false, // Disable default arrows
    beforeChange: (_, newIndex) =>
      setCurrentIndexes((prev) => {
        const newIndexes = [...prev];
        newIndexes[index] = newIndex; // Update the current index for the slider
        return newIndexes;
      }),
    responsive: [
      // Responsive settings for different screen sizes
      { breakpoint: 1024, settings: { slidesToShow: 3, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  });

  return (
    <div className="m-0 p-0 bg-black text-white">
      {/* Prime Video Banner */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="Prime Video Banner"
        className="w-full h-[250px] sm:h-[300px] object-cover"
      />
      <div className="px-4">
        {/* Iterate over movie lists to render sliders for each category */}
        {Object.entries(movieLists).map(([category, list], index) => (
          <div key={category}>
            {/* Category Title */}
            <h1 className="text-xl sm:text-2xl font-bold my-4">
              {category} Movies
            </h1>
            <div className="relative">
              {/* Back arrow button */}
              {currentIndexes[index] > 0 && (
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full"
                  onClick={() => sliderRefs[index].current.slickPrev()}
                >
                  <IoIosArrowBack size={30} color="white" />
                </button>
              )}
              {/* Slider component */}
              <Slider ref={sliderRefs[index]} {...createSettings(index)}>
                {list.map((each) => (
                  <MoviesSlider key={each.id} details={each} />
                ))}
              </Slider>
              {/* Forward arrow button */}
              {currentIndexes[index] < list.length - 4 && (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full"
                  onClick={() => sliderRefs[index].current.slickNext()}
                >
                  <IoIosArrowForward size={30} color="white" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeVideo;
