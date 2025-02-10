import Popup from "reactjs-popup";
import ReactPlayer from "react-player";
import { IoMdClose } from "react-icons/io";

/**
 * MovieItem component renders a movie thumbnail that opens a video popup when clicked.
 * @param {Object} props - Component props
 * @param {Object} props.details - Movie details
 * @param {string} props.details.thumbnailUrl - URL of the movie thumbnail image
 * @param {string} props.details.videoUrl - URL of the movie video
 * @returns {JSX.Element} The MovieItem component
 */
const MovieItem = ({ details }) => {
  // Destructure thumbnailUrl and videoUrl from details
  const { thumbnailUrl, videoUrl } = details;

  return (
    <Popup
      modal
      closeOnDocumentClick={false}
      trigger={
        // Display the movie thumbnail as a clickable image
        <img src={thumbnailUrl} alt="thumbnail" className="rounded-lg w-full" />
      }
    >
      {(close) => (
        <div className="bg-white p-5 md:p-8 relative rounded-lg w-[90vw] max-w-3xl mx-4 overflow-y-auto max-h-[90vh]">
          <button
            type="button"
            onClick={() => close()} // Close the popup
            className="absolute top-1 right-1 md:top-2 md:right-2 bg-none border-none cursor-pointer"
          >
            <IoMdClose className="text-black hover:text-gray-700 size-4 md:size-6" />
          </button>
          <div className="relative pt-[56.25%]">
            {" "}
            {/* 16:9 aspect ratio container */}
            <ReactPlayer
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              config={{
                file: {
                  attributes: {
                    playsInline: true,
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </Popup>
  );
};
export default MovieItem;
