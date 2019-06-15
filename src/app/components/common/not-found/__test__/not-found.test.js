import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NotFound from "../not-found";

configure({ adapter: new Adapter() });

describe("Test Not Found File", () => {
  const wrapper = shallow(<NotFound />);

  it("should render component correctly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
