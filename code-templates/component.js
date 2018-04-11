//https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless

// Presentational or Functional component
// Accepts a single “props” (which stands for properties) object argument with data and returns a React element.
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
  return (
    <div>
      <h1 className="text-center">{props.greeting}</h1>
    </div>
  );
};

MyComponent.propTypes = {
  greeting: PropTypes.string,
};

MyComponent.defaultProps = {
  greeting: 'Hello',
};

export default MyComponent;


// Container  component
//components have internal state and/or refs

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting:'hello'
    }
     
  };
  render() {
    return  
      (<div>
        <h1 className="text-center">{this.state.greeting}</h1>
      </div>)
  }
}
MyComponent.propTypes = {
  greeting: PropTypes.string,
 };

MyComponent.defaultProps = {
  greeting: 'Hello',
};

export default MyComponent;