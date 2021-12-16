import React from "react";
import Enzyme from "enzyme";
import ImageGallery from "./ImageGallery";

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

const products = [1, 2];

describe("Test for image gallery", () => {
    test("renders correctly", () => {
      shallow(<ImageGallery productImages={products}/>);
    });
});