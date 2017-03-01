import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { ShipContainer } from './components/ShipContainer';
import '../assets/bootstrap.min.css';
import '../assets/styles.css';

render(
  <App />,
  document.getElementById('app')
);

render(
  <ShipContainer />,
  document.getElementById('script')
);
