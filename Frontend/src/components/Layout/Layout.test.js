import React from "react";
import Enzyme from "enzyme";
import Layout from "./Layout";

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for layout", () => {
    test("renders correctly", () => {
      shallow(<Layout />);
    });
});