import React from 'react'
import {render} from '@testing-library/react'
import Enzyme from "enzyme";
import Modal from './Modal'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })


describe('Test for Modal', () => {
    test("renders correctly", () => {
        const testProduct = {
            images: [
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P022-PISCINA.jpg/Park-Hyatt-Mendoza-P022-PISCINA.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/08/04/1505/Grand-Hyatt-Shenzhen-P245-In-room-Service.jpg/Grand-Hyatt-Shenzhen-P245-In-room-Service.4x3.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/02/05/1232/NASGH-P721-King-Room.jpg/NASGH-P721-King-Room.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.jpg/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P133-Whirlpool.jpg/Park-Hyatt-Mendoza-P133-Whirlpool.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P062-Park-Twin.jpg/Park-Hyatt-Mendoza-P062-Park-Twin.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1832/Park-Hyatt-Mendoza-P075-Park-King.jpg/Park-Hyatt-Mendoza-P075-Park-King.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P124-Massage-Room.jpg/Park-Hyatt-Mendoza-P124-Massage-Room.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.jpg/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P063-Standard-Bathroom.jpg/Park-Hyatt-Mendoza-P063-Standard-Bathroom.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P065-Gym.jpg/Park-Hyatt-Mendoza-P065-Gym.16x9.jpg"
              ]
        };
        shallow(<Modal product={testProduct} />);
    });     
         
    test('must render button share"', () => {
        const testProduct = {
            images: [
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P022-PISCINA.jpg/Park-Hyatt-Mendoza-P022-PISCINA.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/08/04/1505/Grand-Hyatt-Shenzhen-P245-In-room-Service.jpg/Grand-Hyatt-Shenzhen-P245-In-room-Service.4x3.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/02/05/1232/NASGH-P721-King-Room.jpg/NASGH-P721-King-Room.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.jpg/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P133-Whirlpool.jpg/Park-Hyatt-Mendoza-P133-Whirlpool.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P062-Park-Twin.jpg/Park-Hyatt-Mendoza-P062-Park-Twin.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1832/Park-Hyatt-Mendoza-P075-Park-King.jpg/Park-Hyatt-Mendoza-P075-Park-King.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P124-Massage-Room.jpg/Park-Hyatt-Mendoza-P124-Massage-Room.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.jpg/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P063-Standard-Bathroom.jpg/Park-Hyatt-Mendoza-P063-Standard-Bathroom.16x9.jpg",
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P065-Gym.jpg/Park-Hyatt-Mendoza-P065-Gym.16x9.jpg"
                ]
        };
        const wrapper = shallow(<Modal product={testProduct} />);
        expect(wrapper.find("button").length).toEqual(1);
    });
});