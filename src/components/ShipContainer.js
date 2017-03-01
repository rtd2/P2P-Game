import React, { Component } from 'react';
import { Ship1 } from './Ship1';
import { Ship2 } from './Ship2';
import { Pilot1 } from './Pilot1';
import { Pilot2 } from './Pilot2';

export class ShipContainer extends Component {
  constructor() {
    super();
    this.state = {
      "round": 1,
      "p1": {"x": 0, "y": 6, "facing": "right"},
      "p2": {"x": 29, "y": 18, "facing": "left"}
    }
  }
  checkReady() {
    var round = this.state.round + 1;
    this.setState({"round": round});
  }
  updateMap(val, arc, target) { // should be one function, accepting all into array, set state and attack on each
    if (typeof(val) === 'object') this.setState({"p1": val});
    setTimeout(this.attack, 1000, arc, target);
  }
  updateMap1(val, arc, target) {
    if (typeof(val) === 'object') this.setState({"p1": val});
    setTimeout(this.attack, 1000, arc, target);
  }
  updateMap2(val, arc, target) {
    if (typeof(val) === 'object') this.setState({"p2": val});
    setTimeout(this.attack, 1000, arc, target);
  }
  attack(arc, target) {
    if(target === "red") {
      var player2 = document.getElementById("red").parentElement;
      var x = parseInt(player2.getAttribute("data-x"));
      var y = parseInt(player2.getAttribute("data-y"));
      var insideX, insideY;
      for (var i = 0; i < arc.length; i++) {
        if(arc[i].x === x && arc[i].y === y) {
          var log = document.getElementById("script");
          log.style.color = "white";
          log.innerHTML += "Player 2 is dead<br/>";
          player2.style.color = "white"; // input color error
          player2.innerHTML = ".";
        }
      }
    } else if (target === "blue") {
      var player1 = document.getElementById("blue").parentElement;
      var x = parseInt(player1.getAttribute("data-x"));
      var y = parseInt(player1.getAttribute("data-y"));
      var insideX, insideY;
      for (var i = 0; i < arc.length; i++) {
        if(arc[i].x === x && arc[i].y === y) {
          var log = document.getElementById("script");
          log.style.color = "white";
          log.innerHTML += "Player 1 is dead<br/>";
          player1.style.color = "white";
          player1.innerHTML = ".";
        }
      }
    }
  }
  render() {
    return (
      <div>
        <Ship1 p1Initial={this.state.p1} />
        <Ship2 p2Initial={this.state.p2} />
        <Pilot1 p1Initial={this.state.p1} round={this.state.round} updateMap={this.updateMap1.bind(this)} />
        <Pilot2 p2Initial={this.state.p2} round={this.state.round} updateMap={this.updateMap2.bind(this)} />
        <input type="button" onClick={this.checkReady.bind(this)} value="Ready"/>
      </div>
    );
  }
}
