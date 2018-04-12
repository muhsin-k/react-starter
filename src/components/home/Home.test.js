import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

enzyme.configure({
  adapter: new Adapter(),
});
it('should handle state changes', () => {
  const output = enzyme.shallow(<Home />);

  expect(output.state().clicked).toEqual(false);
  //   output.simulate('handleClick');
  //   expect(output.state().clicked).toEqual(true);
});
