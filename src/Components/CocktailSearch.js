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
        drink: state.DrinkInfo.drink
    }
}

export default connect(mapStateToProps) (CocktailSearch)
