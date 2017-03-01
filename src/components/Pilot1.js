import React, { Component } from 'react';
import maneuver from '../scripts/maneuvers';
import instructions from '../worksheets/instructions1';
import attack from '../scripts/attack';

export class Pilot1 extends Component {
  constructor(props) {
    super(props);
    this.state = {"p1": {"x": this.props.p1Initial.x, "y": this.props.p1Initial.y, "facing": this.props.p1Initial.facing}}
    this.timeout = setTimeout(() => this.update(), 2000);
  }
  update() {
    var instruct = instructions();
    var translated = {};
    var round = this.props.round.toString();
    if(typeof(instruct[round]) === 'object') {
      translated = maneuver(instruct[round].move, this.state.p1);
      var firingArc = attack(translated);
      this.props.updateMap(translated, firingArc, instruct[round].attack);
      this.setState({"p1": translated});
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.round !== this.props.round){
      this.update();
    }
  }
  render() {
    return (
      <div><p></p></div>
    );
  }
}

// attacking
// check location, check range, check facing
// are there objects in arc?
