import React from "react";
import Enzyme from "enzyme";
import {render, screen} from '@testing-library/react'
import ProductCreate from "./ProductCreate";

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for ProductCreate", () => {
    test("renders correctly", () => {
        shallow(<ProductCreate />);
    });
    test("renders h2", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find("h2").length).toEqual(4);
    });
    test("renders label", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find("label").length).toEqual(9);
    });
    test("renders fieldset", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find("fieldset").length).toEqual(5);
    });
    test("renders list", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find(".service").length).toEqual(0);
    });
    test("renders options", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find("option").length).toEqual(2);
    });
    test("renders input", () => {
        const wrapper = shallow(<ProductCreate />);
        expect(wrapper.find("input").length).toEqual(3);
    });
});