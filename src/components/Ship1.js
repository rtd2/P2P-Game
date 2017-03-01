import React, { Component } from 'react';

export class Ship1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }

  componentDidMount() { // initial ship location
    var p1Ini = { p1LocX: this.props.p1Initial.x, p1LocY: this.props.p1Initial.y, p1Facing: this.props.p1Initial.facing }
    var p1XY = '[data-x="' + p1Ini.p1LocX + '"][data-y="' + p1Ini.p1LocY + '"]';
    var p1Loc = document.querySelector(p1XY);
    p1Loc.style.color = "blue";

    switch(p1Ini.p1Facing) {
    case "right":
        p1Loc.innerHTML = "<div id='blue'>&rarr;</div>";
        break;
    case "left":
        p1Loc.innerHTML = "<div id='blue'>&larr;</div>";
        break;
    case "up":
        p1Loc.innerHTML = "<div id='blue'>&uarr;</div>";
        break;
    case "down":
        p1Loc.innerHTML = "<div id='blue'>&darr;</div>";
        break;
    }
  }
  componentWillUpdate(nextProps, nextState) { // set ship location based on pilot instruction
    var p1Next = { LocX: nextProps.p1Initial.x, LocY: nextProps.p1Initial.y, Facing: nextProps.p1Initial.facing }
    var p1XYNext = '[data-x="' + p1Next.LocX + '"][data-y="' + p1Next.LocY + '"]';
    var p1LocNext = document.querySelector(p1XYNext);
    if (p1LocNext !== null && p1LocNext !== undefined) {
      p1LocNext.style.color = "blue";

      switch(p1Next.Facing) {
      case "right":
          p1LocNext.innerHTML = "<div id='blue'>&rarr;</div>";
          break;
      case "left":
          p1LocNext.innerHTML = "<div id='blue'>&larr;</div>";
          break;
      case "up":
          p1LocNext.innerHTML = "<div id='blue'>&uarr;</div>";
          break;
      case "down":
          p1LocNext.innerHTML = "<div id='blue'>&darr;</div>";
          break;
      }
    } else {
      var script = document.getElementById("script");
      script.style.color = "white";
      script.innerHTML += "Player 1 has died";
    }
  }
  componentDidUpdate(prevProps, prevState) { // reset map after ship leaves
    if (prevProps.p1Initial.x !== this.props.p1Initial.x || prevProps.p1Initial.y !== this.props.p1Initial.y){
      var p1Ini = { p1LocX: prevProps.p1Initial.x, p1LocY: prevProps.p1Initial.y, p1Facing: prevProps.p1Initial.facing }
      var p1XY = '[data-x="' + p1Ini.p1LocX + '"][data-y="' + p1Ini.p1LocY + '"]';
      var p1Loc = document.querySelector(p1XY);
      p1Loc.style.color = "white";
      p1Loc.innerHTML = ".";
    }
  }
}
