import React, { Component } from 'react';
import '../App.scss';
import { Drink } from './Drink';
import { getRandom } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';

class Random extends Component {
    constructor(props) {
        super(props);        
    }

    GetRandomCocktail = (e) => {
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
        isFave: state.DrinkInfo.isFave
    }
}

export default connect(mapStateToProps) (Random)
