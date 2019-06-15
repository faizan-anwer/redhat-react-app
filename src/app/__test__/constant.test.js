import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { URL } from "../constant";

configure({ adapter: new Adapter() });

describe("Test URL for the app", () => {

  it("should see empty div for customer", () => {
    expect(URL).toEqual({
        CONTENT: "/",
        CONTENT_DETAIL: "/detail/:number",
        BOOKMARK: "/bookmark"
      });
    });
});
