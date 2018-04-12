import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const utils = require('./utils');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('adds 1 + 2 to equal 3', () => {
  expect(utils(1, 2)).toBe(3);
});
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
