import { Container, Card, CardMedia, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { posterImage, time_convert } from '../../utilities';
import { MyButton } from '../ui/MyButton';
import { Loader } from '../ui/Loader';

import './../../assets/styles/components/DetailMovie.scss';

import NoImage from './../../assets/static/images/no-image.jpg';

const DetailMovie = () => {
  const { loading } = useSelector((state) => state.ui);

  const { activeData } = useSelector((state) => state.movie);

  const [movie, setMovie] = useLocalStorage('movie', '');

  const {
    poster_path,
    original_title,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
    vote_average,
    vote_count,
  } = movie;

  useEffect(() => {
    if (Object.values(activeData).length) {
      setMovie(activeData);
    }
  }, [activeData, setMovie]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: '50px',
        padding: 0,
      }}
    >
      {!!loading && <Loader />}
      <Container
        sx={{
          width: '25%',
        }}
      >
        <Card>
          <CardMedia
            component="img"
            image={!poster_path ? NoImage : `${posterImage}${poster_path}`}
            alt={original_title}
            sx={{
              height: '100%',
              width: '100%',
              margin: 0,
            }}
          />
        </Card>
      </Container>
      <Container
        sx={{
          width: '75%',
        }}
      >
        <Box
          sx={{
            marginTop: '40px',
            marginLeft: '20px',
          }}
        >
          <h1>{`${original_title} ( ${
            release_date && release_date.substring(0, 4)
          })`}</h1>
          <span>
            &reg;{` ${release_date} `}&#8226;
            {` ${genres ? genres.map((e) => e.name).join(',') : ``} `}&#8226;
            {` ${time_convert(runtime)}`}
          </span>
          <h3>{tagline}</h3>
          <h2>Overview</h2>
          <div id="overview">
            <span>{overview}</span>
          </div>
          <div id="vote">
            <span>Vote Average</span>
            <div className="points">{vote_average}</div>
            <span>Vote Count</span>
            <div className="points">{vote_count}</div>
          </div>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItem: 'center',
          marginTop: '50px',
          padding: 0,
        }}
      >
        <MyButton name="Go Back" to="/movies" />
      </Container>
    </Container>
  );
};

export default DetailMovie;
