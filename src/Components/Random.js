import React, { Component } from 'react';
import '../App.scss';
import { Drink } from './Drink';
import { getRandom } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';

class Random extends Component {
    constructor(props) {
        super(props);
        
        this.GetRandomCocktail = this.GetRandomCocktail.bind(this);
    }

    GetRandomCocktail(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch((getRandom()));    
    }

    render() {
        return (
            <div className="drink-selection">
                <p>
                Just want a random drink?
                </p>
                <p>
                <button className="btn" onClick={e => this.GetRandomCocktail(e)}>
                    Get Random Drink
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

export default connect(mapStateToProps) (Random)
