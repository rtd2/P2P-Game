import React, { Component } from 'react';
import { StarMap } from './StarMap';

export class StarMapContainer extends Component {

  constructor() {
    super();
    this.state = {
      numColumns: ""

    }
  }

  render() {
    return (
      <StarMap columns={this.state.numColumns} />
    );
  }

  componentDidMount() {

    var columns = "30";
    this.setState({numColumns: columns});

    var string = window.document.styleSheets[0].cssRules[130].cssText;  // string from css rule that contains columns
    var col = "";
    var counter = 10;

    for(var i = 1; i < 25; i++) {

      var current = string[string.length-i];

      if(current.match(/^\d+$/)){
        col = current + col;
        counter--;

        if (counter = 0) break;
      }
    }

  }
}
