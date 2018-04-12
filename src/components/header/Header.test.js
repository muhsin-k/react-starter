import React from 'react';
import ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

enzyme.configure({
  adapter: new Adapter(),
});

describe('Render Header By Snap', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    const output = enzyme.shallow(<Header title="Trending Movies in India" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
