import React from 'react';
import { Header } from './ui/Header';
import PropTypes from 'prop-types';

export const Principal = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Principal.propTypes = {
  children: PropTypes.element.isRequired,
};
