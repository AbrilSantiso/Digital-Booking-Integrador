import React from "react";
import Enzyme from "enzyme";
import UserReservationCard from "./UserReservationCard";

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe("Test for User Reservation Card", () => {
    test("renders correctly", () => {
        shallow(<UserReservationCard/>);
    });
});