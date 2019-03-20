import React, { Component } from 'react';
import '../App.scss';
import { Drink } from './Drink';
import { updateDrinkName, getDrink } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';
import CocktailInput from './CocktailInput';

class CocktailSearch extends Component {
    constructor(props) {
        super(props);
        
        this.getCocktail = this.getCocktail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getCocktail(e) {
        e.preventDefault();    
        const {dispatch} = this.props;
        if (this.props.drink !== ""){
          dispatch((getDrink(this.props.drink))); 
        }
        else {
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
        picture: state.DrinkInfo.picture,
        measure1: state.DrinkInfo.measure1,
        measure2: state.DrinkInfo.measure2,
        measure3: state.DrinkInfo.measure3,
        isFave: state.DrinkInfo.isFave
    }
}

export default connect(mapStateToProps) (CocktailSearch)
