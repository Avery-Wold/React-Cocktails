import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from "enzyme";
import Header from "../Header";
import CocktailSearch from "../CocktailSearch";
import Random from "../Random";
import SpiritSearch from "../SpiritSearch";

configure({adapter: new Adapter()});

describe("Main", () => {
    it("header should render correctly", () => {
        const shallowApp = shallow(<Header />);
        expect(shallowApp).toMatchSnapshot();
    });

    it("cocktailsearch should render correctly", () => {
        const shallowApp = shallow(<CocktailSearch />);
        expect(shallowApp).toMatchSnapshot();
    });

    it("random should render correctly", () => {
        const shallowApp = shallow(<Random />);
        expect(shallowApp).toMatchSnapshot();
    });

    it("spiritsearch should render correctly", () => {
        const shallowApp = shallow(<SpiritSearch />);
        expect(shallowApp).toMatchSnapshot();
    });
});