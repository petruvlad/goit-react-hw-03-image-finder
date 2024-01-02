// Loader.jsx
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <Oval color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
