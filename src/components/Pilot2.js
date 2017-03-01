import React, { Component } from 'react';
import maneuver from '../scripts/maneuvers';
import instructions from '../worksheets/instructions2';
import attack from '../scripts/attack';

export class Pilot2 extends Component {
  constructor(props) {
    super(props);
    this.state = {"p2": {"x": this.props.p2Initial.x, "y": this.props.p2Initial.y, "facing": this.props.p2Initial.facing}}
    this.timeout = setTimeout(() => this.update(), 4000);
  }
  update() {
    var instruct = instructions();
    var translated = {};
    var round = this.props.round.toString();
    translated = maneuver(instruct[round].move, this.state.p2);
    var firingArc = attack(translated);
    this.props.updateMap(translated, firingArc, instruct[round].attack);
    this.setState({"p2": translated});
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
