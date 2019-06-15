import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ContentDetail from "../content-detail";

configure({ adapter: new Adapter() });

describe("Test Not Found File", () => {
  const wrapper = shallow(<ContentDetail />);

  it("should render component correctly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
