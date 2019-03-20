import React, { Component } from 'react';
import './App.scss';
import {Drink} from './Components/Drink';
import { getFave } from './Actions/DrinkInfo';
import { connect } from 'react-redux';
import Header from './Components/Header';
import Random from './Components/Random';
import CocktailSearch from './Components/CocktailSearch';

class App extends Component {
  constructor(props) {
    super(props);

    this.getAveryFave = this.getAveryFave.bind(this);
  }

  getAveryFave(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch((getFave()));    
  }

  render() {
    const {drink, glass, instructions, ingredient1, ingredient2, ingredient3, picture, measure1, measure2, measure3, isFave} = this.props;

    if(!isFave) {
      return (
        <div className="App">
          <Header/>
          <div className="App-intro">
            <p>
              Mixology is popular, have you been wanting to try to mix your own cocktails?  Let's 
              get started!  You will be able to select a spirit you would like to use, or enter the 
              name of a cocktail you like and want to try making yourself.  If you just want to see
              what Avery's favorite is, just click the button below!
            </p>
          </div>
          <button 
            className="btn" 
            onClick={e => this.getAveryFave(e)}>
              Avery's favorite
          </button>
          <br/>
          <br/>
          <CocktailSearch/>
          <Random/>
        </div>
      );
    }

    if (isFave) {
      return (
        <div className="App">
          <Header/>          
          <Drink drink ={drink} glass ={glass} instructions ={instructions} ingredient1 ={ingredient1}
            ingredient2 ={ingredient2} ingredient3 ={ingredient3} picture ={picture}
            measure1 ={measure1} measure2 ={measure2} measure3 ={measure3} 
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    drink: state.DrinkInfo.drink,
    glass: state.DrinkInfo.glass,
    instructions: state.DrinkInfo.instructions,
    ingredient1: state.DrinkInfo.ingredient1,
    ingredient2: state.DrinkInfo.ingredient2,
    ingredient3: state.DrinkInfo.ingredient3,
    picture: state.DrinkInfo.picture,
    measure1: state.DrinkInfo.measure1,
    measure2: state.DrinkInfo.measure2,
    measure3: state.DrinkInfo.measure3,
    isFave: state.DrinkInfo.isFave
  }
}

export default connect(mapStateToProps) (App);
