import React from "react";
import Enzyme from "enzyme";
import AboutUsScreen from "./AboutUsScreen";
import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for About Us Screen", () => {
    test("renders correctly", () => {
        shallow(<AboutUsScreen/>);
    });
});