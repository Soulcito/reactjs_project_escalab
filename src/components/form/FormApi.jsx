import React from 'react';
import {
  Container,
  Box,
  TextField,
  NativeSelect,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { useForm } from '../../hooks/useForm';

import { Loader } from '../ui/Loader';

import './../../assets/styles/components/FormApi.scss';

const FormApi = () => {
  const { loading, handleSubmit, errors, touched, getFieldProps } = useForm();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
      }}
    >
      {!!loading && <Loader />}
      <form noValidate onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)' }}>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
            <h2>FIND YOUR MOVIE!!</h2>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <TextField
              error={touched.language && errors.language}
              helperText={errors.language || ''}
              id="language"
              type="text"
              label="language"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              autoComplete="off"
              {...getFieldProps('language')}
            />
            <TextField
              error={touched.page && errors.page}
              helperText={errors.page || ''}
              id="page"
              type="number"
              label="page"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              autoComplete="off"
              {...getFieldProps('page')}
            />
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="include_adult">include_adult</InputLabel>
              <NativeSelect
                inputProps={{
                  name: 'include_adult',
                  id: 'include_adult',
                }}
                sx={{ m: 1, width: '25ch', padding: '5px' }}
                {...getFieldProps('include_adult')}
              >
                <option value="false">false</option>
                <option value="true">true</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
            <TextField
              error={touched.query && errors.query ? true : false}
              helperText={errors.query || ''}
              id="query"
              type="text"
              label="search movie"
              variant="outlined"
              sx={{ m: 1, width: '85ch' }}
              autoComplete="off"
              {...getFieldProps('query')}
            />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <TextField
              error={touched.region && errors.region ? true : false}
              helperText={errors.region || ''}
              id="region"
              type="text"
              label="region"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              autoComplete="off"
              {...getFieldProps('region')}
            />
            <TextField
              error={touched.year && errors.year ? true : false}
              helperText={errors.year || ''}
              id="year"
              type="number"
              label="year"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              autoComplete="off"
              {...getFieldProps('year')}
            />
            <TextField
              error={
                touched.primary_release_year && errors.primary_release_year
                  ? true
                  : false
              }
              helperText={errors.primary_release_year || ''}
              id="primary_release_year"
              type="number"
              label="primary_release_year"
              variant="outlined"
              sx={{ m: 1, width: '25ch' }}
              autoComplete="off"
              {...getFieldProps('primary_release_year')}
            />
          </Box>
        </Box>
        <Button className="button" variant="text" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormApi;
