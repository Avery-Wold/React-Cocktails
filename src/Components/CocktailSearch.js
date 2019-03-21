import React, { Component } from 'react';
import '../App.scss';
import { Drink } from './Drink';
import { updateDrinkName } from '../Actions/UpdateInfo';
import { getDrink } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';
import CocktailInput from './CocktailInput';

class CocktailSearch extends Component {
    constructor(props) {
        super(props);        
    }

    getCocktail = (e) => {
        e.preventDefault();    
        const {dispatch} = this.props;
        if (this.props.drink !== ""){
            dispatch((getDrink(this.props.drink))); 
        }
        else {
            // add validation
            alert("Please enter a drink name");
        }
    }
    
    handleChange = (event) => {
        event.preventDefault();
        // this.setState({showFormErrors:false});
        var cocktail = event.target.value;
        var searchString = cocktail.replace(/\s/g, "+");
        console.log(searchString);
        const { dispatch } = this.props;
        dispatch(updateDrinkName(cocktail));
    }

    render() {
        return (
            <div className="drink-selection">
                <p>
                Already know what you want to make?
                </p>
                <p>
                <CocktailInput value={this.props.drink} name="drink" onChange={this.handleChange} />
                <button 
                    className="btn"
                    onClick={e => this.getCocktail(e)}>
                    Get Drink
                </button>
                </p>
            </div>
        )
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
        ingredient4: state.DrinkInfo.ingredient4,
        ingredient5: state.DrinkInfo.ingredient5,
        ingredient6: state.DrinkInfo.ingredient6,
        ingredient7: state.DrinkInfo.ingredient7,
        ingredient8: state.DrinkInfo.ingredient8,
        ingredient9: state.DrinkInfo.ingredient9,
        ingredient10: state.DrinkInfo.ingredient10,
        ingredient11: state.DrinkInfo.ingredient11,
        ingredient12: state.DrinkInfo.ingredient12,
        ingredient13: state.DrinkInfo.ingredient13,
        ingredient14: state.DrinkInfo.ingredient14,
        ingredient15: state.DrinkInfo.ingredient15,
        picture: state.DrinkInfo.picture,
        measure1: state.DrinkInfo.measure1,
        measure2: state.DrinkInfo.measure2,
        measure3: state.DrinkInfo.measure3,
        measure4: state.DrinkInfo.measure4,
        measure5: state.DrinkInfo.measure5,
        measure6: state.DrinkInfo.measure6,
        measure7: state.DrinkInfo.measure7,
        measure8: state.DrinkInfo.measure8,
        measure9: state.DrinkInfo.measure9,
        measure10: state.DrinkInfo.measure10,
        measure11: state.DrinkInfo.measure11,
        measure12: state.DrinkInfo.measure12,
        measure13: state.DrinkInfo.measure13,
        measure14: state.DrinkInfo.measure14,
        measure15: state.DrinkInfo.measure15,
        isFave: state.DrinkInfo.isFave
    }
}

export default connect(mapStateToProps) (CocktailSearch)
