import React from 'react';
import { Container } from '@mui/material';
import Marciano from './../../assets/static/images/marciano.jpg';

import './../../assets/styles/components/NotFound.scss';
import { MyButton } from './MyButton';

export const NotFound = () => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <h1 id="myH1">Whoops!</h1>
    <div className="myContainer">
      <h2>404 Page Not Found</h2>
    </div>
    <div className="myContainer">
      <img id="marciano" src={Marciano} alt="marciano" />
    </div>
    <div className="myContainer">
      <MyButton name="Go Home" to="/" />
    </div>
  </Container>
);
