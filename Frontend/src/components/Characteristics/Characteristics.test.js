import React from "react";
import Enzyme from "enzyme";
import Characteristics from "./Characteristics";
import { FaSwimmer, FaWifi, FaCoffee, FaUtensils, FaSnowflake, FaSmokingBan, FaCocktail, FaPaw, FaCar, FaConciergeBell, FaDumbbell, FaSpa, FaTv } from "react-icons/fa";
import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

const characteristics = ['FaWiFi','FaSwim','FaCoffee', 'FaUtensils', 'FaSnowflake', 'FaSmokingBan', 'FaCocktail', 'FaPaw', 'FaCar', 'FaConciergeBell', 'FaDumbbell', 'FaSpa', 'FaTv'];

describe("Test for characteristics", () => {
    test("renders correctly", () => {
        shallow(<Characteristics productCharacteristics={characteristics}/>);
    });
    test("renders list outside home", () => {
        const wrapper = shallow(<Characteristics productCharacteristics={characteristics}/>);
        expect(wrapper.find(".service").length).toEqual(13);
    });
    test("renders list in home", () => {
        const wrapper = shallow(<Characteristics productCharacteristics={characteristics} page={"home"}/>);
        expect(wrapper.find(".service").length).toEqual(0);
    });
});