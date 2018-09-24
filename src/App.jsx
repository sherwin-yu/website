import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact/ContactContainer';

const App = () => (
  <div>
    <p>under construction, coming soon :(</p>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={() => <h1 style={{ padding: '1em' }}>404: Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default hot(module)(App);
