import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));

interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <>
      <div className='container p-5'>
        <h3>App Component</h3>
        <hr />
        <BrowserRouter>
          <Navbar />
          <hr />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/home' exact component={Home} />
              <Redirect from='/' to='/home' exact />
              <Route path='/about/:message' exact component={About} />
              <Route path='/contact' exact component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
