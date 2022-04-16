import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { urlImage } from '../../utilities';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLoadingMovie } from '../../actions/movie';
import PropTypes from 'prop-types';

import './../../assets/styles/components/Movie.scss';

import NoImage from './../../assets/static/images/no-image.jpg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Movie = (props) => {
  const dispatch = useDispatch();

  let history = useHistory();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    id,
    language,
    backdrop_path,
    original_title,
    overview,
    release_date,
    poster_path,
  } = props;

  const image = poster_path ? backdrop_path : poster_path;

  const handleOnClick = () => {
    dispatch(startLoadingMovie(id, language));
    history.push('/detail');
  };

  return (
    <Card sx={{ maxWidth: 250, margin: '10px' }} className="myCard">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            TM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={original_title}
        subheader={release_date}
      />
      <CardMedia
        component="img"
        // height="150"
        image={!image ? NoImage : `${urlImage}${image}`}
        alt={original_title}
        sx={{
          paddingTop: '5',
          height: '250px',
          width: '180px',
        }}
        onClick={handleOnClick}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Overview:</Typography>
          <Typography paragraph>{overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
};

export default Movie;
