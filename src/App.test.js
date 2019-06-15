import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';

configure({ adapter: new Adapter() });

describe("Test Not Found File", () => {
  const wrapper = shallow(<App />);

  it("should render component correctly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});


