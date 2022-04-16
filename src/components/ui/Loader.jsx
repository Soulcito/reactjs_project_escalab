import React from 'react';
import './../../assets/styles/components/Loader.scss';

export const Loader = () => {
  return (
    <div className="wait-wrap">
      <div className="wait-bounceball"></div>
      <div className="wait-text">PLEASE WAIT...</div>
    </div>
  );
};
