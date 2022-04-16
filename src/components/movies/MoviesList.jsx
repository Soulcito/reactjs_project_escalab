import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';
import Movie from './Movie';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { NotMatch } from '../ui/NotMatch';
import { Loader } from '../ui/Loader';

const MoviesList = () => {
  const { data, language } = useSelector((state) => state.movie);
  const [movies, setMovies] = useLocalStorage('movies', '');

  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    setMovies(data);
  }, [data, setMovies]);

  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: '100px',
        width: '100%',
      }}
    >
      {!!loading && <Loader />}
      <Grid container spacing={12}>
        {movies.length ? (
          movies.map((movie) => (
            <Movie key={movie.id} {...movie} language={language} />
          ))
        ) : (
          <NotMatch />
        )}
      </Grid>
    </Container>
  );
};

export default MoviesList;
