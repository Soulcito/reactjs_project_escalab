import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './router/App'
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

ReactDOM.render(  
    <Provider store={store}>
     <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => console.error(error.message)}>
        <App />
      </ErrorBoundary>
     </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


