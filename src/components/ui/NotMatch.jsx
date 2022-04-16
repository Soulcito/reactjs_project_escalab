import React from 'react';
import Marciano from './../../assets/static/images/marciano2.jpg';
import { MyButton } from './MyButton';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MyContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  display: block;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Subtitulo = styled.h2`
  display: block;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Imagen = styled.img`
  width: 250px;
  height: 400px;
  opacity: 0.5;
  margin-bottom: 20px;
`;

export const NotMatch = () => {
  const { loading } = useSelector((state) => state.ui);
  return (
    <Container>
      {!!loading && <Loader />}
      <Titulo>Sorryyyyyyy!</Titulo>
      <MyContainer>
        <Subtitulo>Nothing match!!!!!!</Subtitulo>
      </MyContainer>
      <MyContainer>
        <Imagen src={Marciano} alt="marciano" />
      </MyContainer>
      <Container>
        <MyButton name="Go Home" to="/" />
      </Container>
    </Container>
  );
};
