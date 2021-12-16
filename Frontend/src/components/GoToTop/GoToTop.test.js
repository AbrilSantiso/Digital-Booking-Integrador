import React from "react";
import Enzyme from "enzyme";
import {render, screen} from '@testing-library/react'
import GoToTop from "./GoToTop";
import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for GoToTop", () => {
    test("renders correctly", () => {
        shallow(<GoToTop/>);
    });
});