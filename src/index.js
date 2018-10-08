import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap-4-grid';
import './index.css';

import App from './App';

render(<App />, document.getElementById('app'));
