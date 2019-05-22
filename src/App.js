import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Developer from './components/Developer/DeveloperContainer';
import Photography from './components/Photography/PhotographyContainer';
import SocialLinks from './components/common/SocialLinks';

const App = () => (
  <div>
    <Navbar />
    <SocialLinks />
    <Switch>
      <Route exact path="/" component={Developer} />
      <Route path="/photography" component={Photography} />
      <Route
        path="*"
        component={() => (
          <h1 style={{ textAlign: 'center', padding: '1em' }}>
            404: Page Not Found
            <span role="img" aria-label="confounded-face" style={{ marginLeft: '5px' }}>
              😖
            </span>
          </h1>
        )}
      />
    </Switch>
    <Footer />
  </div>
);

export default hot(module)(App);
