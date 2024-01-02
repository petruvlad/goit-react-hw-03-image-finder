// Modal.js
import React, { useEffect } from 'react';

const Modal = ({ imageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal">
        <img src={imageUrl} alt="Modal" />
      </div>
    </div>
  );
};

export default Modal;
