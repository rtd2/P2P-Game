import React, { Component } from 'react';

export class Ship2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }

  componentDidMount() { // initial ship location
    var p2Ini = { p2LocX: this.props.p2Initial.x, p2LocY: this.props.p2Initial.y, p2Facing: this.props.p2Initial.facing }
    var p2XY = '[data-x="' + p2Ini.p2LocX + '"][data-y="' + p2Ini.p2LocY + '"]';
    var p2Loc = document.querySelector(p2XY);
    p2Loc.style.color = "red";

    switch(p2Ini.p2Facing) {
    case "right":
        p2Loc.innerHTML = "<div id='red'>&rarr;</div>";
        break;
    case "left":
        p2Loc.innerHTML = "<div id='red'>&larr;</div>";
        break;
    case "up":
        p2Loc.innerHTML = "<div id='red'>&uarr;</div>";
        break;
    case "down":
        p2Loc.innerHTML = "<div id='red'>&darr;</div>";
        break;
    }
  }
  componentWillUpdate(nextProps, nextState) { // set ship location based on pilot instruction
    var p2Next = { LocX: nextProps.p2Initial.x, LocY: nextProps.p2Initial.y, Facing: nextProps.p2Initial.facing }
    var p2XYNext = '[data-x="' + p2Next.LocX + '"][data-y="' + p2Next.LocY + '"]';
    var p2LocNext = document.querySelector(p2XYNext);
    if (p2LocNext !== null && p2LocNext !== undefined) {
      p2LocNext.style.color = "red";

      switch(p2Next.Facing) {
      case "right":
          p2LocNext.innerHTML = "<div id='red'>&rarr;</div>";
          break;
      case "left":
          p2LocNext.innerHTML = "<div id='red'>&larr;</div>";
          break;
      case "up":
          p2LocNext.innerHTML = "<div id='red'>&uarr;</div>";
          break;
      case "down":
          p2LocNext.innerHTML = "<div id='red'>&darr;</div>";
          break;
      }
    } else {
      var script = document.getElementById("script");
      script.style.color = "white";
      script.innerHTML += "Player 2 has died";
    }
  }
  componentDidUpdate(prevProps, prevState) { // reset map after ship leaves
    if (prevProps.p2Initial.x !== this.props.p2Initial.x || prevProps.p2Initial.y !== this.props.p2Initial.y){
      var p2Ini = { p2LocX: prevProps.p2Initial.x, p2LocY: prevProps.p2Initial.y, p2Facing: prevProps.p2Initial.facing }
      var p2XY = '[data-x="' + p2Ini.p2LocX + '"][data-y="' + p2Ini.p2LocY + '"]';
      var p2Loc = document.querySelector(p2XY);
      p2Loc.style.color = "white";
      p2Loc.innerHTML = ".";
    }
  }
}
