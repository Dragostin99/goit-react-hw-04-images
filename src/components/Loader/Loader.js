import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#3f51b5"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
