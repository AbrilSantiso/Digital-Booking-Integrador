import React from 'react'
import Enzyme from "enzyme";
import Categories from './Categories'
import Adapter from "enzyme-adapter-react-16"
const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

function data(){
  fetch('http://digitalbooking.xyz:8081/categories/all')
      .then(response => {
          return response.json();
      })
}

describe("characteristics", () => {
    test("renders correctly", () => {
      shallow(<Categories category={data}/>);
    });
});