import React from "react";
import Enzyme from "enzyme";
import UserPanel from "./UserPanel";

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for User User Panel", () => {
    test("renders correctly", () => {
        shallow(<UserPanel/>);
    });
});