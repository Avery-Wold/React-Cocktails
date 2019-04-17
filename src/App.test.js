import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Header';
import { shallow, mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Main } from './Components/MainPage/Main';
import Random from './Components/Random';

configure({adapter: new Adapter()});

describe("App", () => {
  
  it("should render correctly", () => {
    const shallowApp = shallow(<App />);
    expect(shallowApp).toMatchSnapshot();
  });

  it("main should render correctly", () => {
    const shallowApp = shallow(<Main />);
    expect(shallowApp).toMatchSnapshot();
  });
});