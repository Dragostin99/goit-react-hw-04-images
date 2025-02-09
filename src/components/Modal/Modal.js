import { useEffect } from 'react';

const Modal = ({ largeImageUrl, setModalIsVisible }) => {
  const handleEscape = event => {
    if (event.key === 'Escape') {
      setModalIsVisible(false);
    }
  };

  const closeBtnHandle = () => {
    setModalIsVisible(false);
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      setModalIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      return document.removeEventListener('keydown', handleEscape);
    };
  });

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImageUrl} alt="large" />
        <button type="button" className="close-btn" onClick={closeBtnHandle}>
          X
        </button>
      </div>
    </div>
  );
};
export default Modal;
