
import orderCitys from "./orderCitys";

describe("Test for Order cities", () => {
    test("order correctly <", () => {
        const citys = [{name: "Buenos Aires"}, {name:"Bogotá"}]
        expect(orderCitys(citys)).toEqual([{"name": "Bogotá"}, {"name": "Buenos Aires"}]);
    });
    test("order correctly =", () => {
        const citys = [{name: "Bogotá"}, {name:"Bogotá"}]
        expect(orderCitys(citys)).toEqual([{"name": "Bogotá"}, {"name": "Bogotá"}]);
    });
    test("order correctly >", () => {
        const citys = [{name: "Bogotá"}, {name:"Buenos Aires"}]
        expect(orderCitys(citys)).toEqual([{"name": "Bogotá"}, {"name": "Buenos Aires"}]);
    });
});