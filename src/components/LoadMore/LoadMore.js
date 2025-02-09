import { useRef } from 'react';

const LoadMore = ({ setPageNum, pageNum, maxPages }) => {
  const btnRef = useRef();
  const handleClick = () => {
    if (pageNum === maxPages) {
      btnRef.current.disabled = true;
      return;
    }
    setPageNum(pageNum + 1);
  };
  return (
    <button className="Button" onClick={handleClick} ref={btnRef}>
      Load more
    </button>
  );
};
export default LoadMore;
