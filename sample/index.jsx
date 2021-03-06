import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReCaptcha from '../src/index';

class Parent extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.child.execute(); // Triggers Invisible ReCaptcha
  }

  static onSuccess(token) {
    window.console.log(token);
  }

  render() {
    return (
      <div>
        <ReCaptcha
          token="TEST_TOKEN"
          size="invisible"
          onSuccess={this.onSuccess}
          onRef={(ref) => { this.child = ref; }}
        />
        <button type="button" onClick={this.onClick}>Child.method()</button>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <div>
      <span>Hello World</span>
      <Parent />
    </div>
  ),
  document.getElementById('app'),
);
