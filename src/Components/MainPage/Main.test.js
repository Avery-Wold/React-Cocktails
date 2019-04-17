import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from "enzyme";
import Header from "../Header";
import {CocktailSearch} from "../CocktailSearch";
import Random from "../Random";
import SpiritSearch from "../SpiritSearch";
import { Drink } from "../Drink";
import { Main } from "./Main";
import {getAveryFave} from "./Main"

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

    it("should find drink when averys fave clicked", () => {
        const mountedApp = mount(<Main />);
        mountedApp
          .find('btn-fave')
          .simulate('click')
        expect(mountedApp.find(Drink).length).toBe(1);
    });

    // it('should call get avery fave function when button is clicked', () => {
    //     const tree = shallow(
    //       <button name='btn-fave' handleClick={getAveryFave} />
    //     );
    //     tree.simulate('click');
    //     expect(getAveryFave).toHaveBeenCalled();
    //   });
});