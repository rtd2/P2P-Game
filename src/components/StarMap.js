import React, { Component } from 'react';

export class StarMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    var numColumns = this.props.columns;
    var rowHTML1 = [];
    var rowHTML2 = [];
    var counter1 = 0;

    for(var i = 0; i < numColumns; i++){
      rowHTML1.push('<div data-x="' + counter1 + '" data-y="');
      rowHTML2.push('" class="col-md-1">');
      counter1++;
    }

    var mapHTML = '';
    var counter2 = 29;

    for(var i = 0; i < numColumns; i++){
      mapHTML += '<div class="row">';
      for(var t = 0; t < numColumns; t++) {
        mapHTML += rowHTML1[t] + counter2 + rowHTML2[t] + '<p>.</p></div>';
      }
      mapHTML += '</div>';
      counter2--;
    }

    return (
      <div dangerouslySetInnerHTML={{__html: mapHTML}}></div>
    );
  }
}
