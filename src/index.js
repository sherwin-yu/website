import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'carbon-components/scss/globals/scss/styles.scss';

import App from './App';

render(<App />, document.getElementById('app'));
