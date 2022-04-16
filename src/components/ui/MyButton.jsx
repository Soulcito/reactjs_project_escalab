import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import './../../assets/styles/components/MyButton.scss';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const MyButton = ({ name, to }) => {
  const home = name.toLowerCase().includes('home');
  const back = name.toLowerCase().includes('back');
  return (
    <Link className="myButton" to={to}>
      <Button variant="contained" color="primary">
        {home && <HomeIcon sx={{ color: 'white', marginRight: '5px' }} />}
        {back && <ArrowLeftIcon sx={{ color: 'white', marginRight: '5px' }} />}
        {name}
      </Button>
    </Link>
  );
};

MyButton.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
