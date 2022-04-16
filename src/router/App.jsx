import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Principal } from '../components/Principal';
import { Loader } from '../components/ui/Loader';
import { NotFound } from '../components/ui/NotFound';
import { Detail } from '../containers/Detail';
import { Form } from '../containers/Form';

const Movies = lazy(() => import('../containers/Movies'));

const App = () => (
  <Principal>
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/" component={Form} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Principal>
);

export default App;
