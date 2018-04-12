import React from 'react';
import ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

enzyme.configure({
  adapter: new Adapter(),
});

describe('Header', () => {
  // Normal
  // This test mounts a component and checks that it doesn't throw an exception during rendering.
  test('renders without crashing[Normal Way]', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
  // The difference between shallow() and mount() is that shallow() tests components in isolation
  // from the child components they render
  // while mount() goes deeper and tests a component's children
  // Enzyme
  it('renders without crashing[Enzyme Way Mount]', () => {
    enzyme.mount(<Header />);
  });
  it('renders without crashing[Enzyme Way Shallow]', () => {
    enzyme.shallow(<Header />);
  });
  it('renders title ', () => {
    // const wrapper = enzyme.shallow(<Header />);
    // const welcome = <a href="#/home" class="brand-logo center">Trending Movies in India</a>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
  });
  // Snapshot
  it('should render correctly[Snapshot Way]', () => {
    const output = enzyme.shallow(<Header title="Trending Movies in India" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
