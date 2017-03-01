import React, { Component } from 'react';
import { StarMapContainer } from './StarMapContainer';
import { ShipContainer } from './ShipContainer';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid" ><StarMapContainer /></div>
    );
  }
}
