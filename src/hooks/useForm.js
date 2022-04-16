import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { startLoadingMovies } from '../actions/movie';

import * as Yup from 'yup';

export const useForm = () => {

  let history = useHistory();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      language: 'en-US',
      page: 1,
      include_adult: 'false',
      query: '',
      region: '',
      year: '',
      primary_release_year: '',
    },
    onSubmit: (values) => {
      const {
        query,
        language,
        page,
        include_adult,
        region,
        year,
        primary_release_year,
      } = values;
      dispatch(
        startLoadingMovies(
          query,
          language,
          page,
          include_adult,
          region,
          year,
          primary_release_year
        )
      );
      history.push('/movies');
    },
    validationSchema: Yup.object({
      language: Yup.string()
        .matches(
          /([a-z]{2})-([A-Z]{2})/,
          'Pass a ISO 639-1 value to display translated data for the fields that support it.'
        )
        .min(2, 'Must be 2 characters or more'),
      query: Yup.string()
        .min(1, 'Must be 1 characters or more')
        .required('Required'),
      page: Yup.number()
        .integer()
        .min(1, 'The minimum number must be 1')
        .max(1000, 'The maximum number must be 1000'),
      region: Yup.string().matches(
        /^[A-Z]{2}$/,
        'Specify a ISO 3166-1 code to filter release dates. Must be uppercase'
      ),
      year: Yup.number().integer(),
      primary_release_year: Yup.number().integer(),
    }),
  });

  return {
    loading,
    handleSubmit,
    errors, 
    touched, 
    getFieldProps
  }

}

