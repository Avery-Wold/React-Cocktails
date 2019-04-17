import React, { Component } from 'react';
import '../App.scss';
import { updateDrinkName } from '../Actions/UpdateInfo';
import { getDrink } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';
import CocktailInput from './CocktailInput';
import FormErrors from './FormErrors';

export class CocktailSearch extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            formErrors: {
              validCocktail: ''
            },
            isCocktailValid: false,
            showFormErrors: false
        }       
    }

    getCocktail = (e) => {
        e.preventDefault();
        let newFormErrors = this.state.formErrors;
        let validCocktail = this.state.isCocktailValid;    
        const {dispatch} = this.props;
        if (this.props.drink !== ""){
            dispatch((getDrink(this.props.drink))); 
        }
        else {
            newFormErrors.validCocktail = 'Please enter a valid drink name';
            this.setState({formErrors: newFormErrors, showFormErrors: true, isCocktailValid: validCocktail});
        }
    }
    
    handleChange = (event) => {
        event.preventDefault();
        this.setState({showFormErrors: false});
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
                {(!this.state.isCocktailValid) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
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
