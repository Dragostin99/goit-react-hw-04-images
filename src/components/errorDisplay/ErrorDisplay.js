import errorImage from '../error-image.png';

const ErrorDisplay = () => {
  return (
    <div className="error">
      <h2>
        Error fetching images. Please check your internet connection and try
        again
      </h2>
      <img src={errorImage} alt="" />
    </div>
  );
};
export default ErrorDisplay;
