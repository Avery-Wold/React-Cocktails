import React, { Component } from 'react';
import '../App.scss';
import { getDrink } from '../Actions/DrinkInfo';
import Header from './Header';
import { Drink } from './Drink';
import { connect } from 'react-redux';

class DrinkList extends Component {

    getCocktail = (e) => {
        e.preventDefault(); 
        const {dispatch} = this.props;
        dispatch((getDrink(e.target.value))); 

    }

    render() {
        const { drinks, isFave } = this.props;
        if (isFave) {
            return (
              <div className="App">
                <Header />
                <Drink drinks={drinks}
                />
              </div>
            );
        }
        if(drinks) {
            return(
                <div>
                    <h1>{this.props.spirit} drinks</h1>
                    <ul>
                    {this.props.drinks.map((drinks) => {
                        return (
                            <div className="drink-list-div">
                                <div className="container">
                                    <li key={drinks.strDrink}>{drinks.strDrink}
                                    <img src={drinks.strDrinkThumb} className="drink-list" alt="cocktail"/>
                                    </li>
                                    <button className="btn" 
                                        value={drinks.strDrink} 
                                        key={drinks.strDrink} 
                                        onClick={e => this.getCocktail(e)}>
                                        Make It
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    </ul>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
      isFave: state.DrinkInfo.isFave,
      drinks: state.DrinkInfo.drinks,
      spirit: state.DrinkInfo.spirit
    }
  }
  
  export default connect(mapStateToProps)(DrinkList);