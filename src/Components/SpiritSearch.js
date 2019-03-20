import React, { Component } from 'react';
import '../App.scss';
import { Drink } from './Drink';
import { updateSpirit, getSpirit } from '../Actions/DrinkInfo';
import { connect } from 'react-redux';
import SpiritInput from './SpiritInput';

class SpiritSearch extends Component {
    constructor(props) {
        super(props);        
    }

    getSpiritList = (e) => {
        e.preventDefault();    
        const {dispatch} = this.props;        
        if (this.props.spirit !== "" || this.props.spirit === undefined){
            dispatch((getSpirit(this.props.spirit))); 
        }
        else {
            // add validation
            alert("Please enter a spirit");
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        // this.setState({showFormErrors:false});
        var spirit = e.target.value;
        const { dispatch } = this.props;
        dispatch(updateSpirit(spirit));
    }

    render() {
        return (
            <div className="drink-selection">
                <p>
                What kind of spirit would you like to use?
                </p>
                <p>
                <SpiritInput value={this.props.spirit} name="spirit" onChange={this.handleChange} />
                <button 
                    className="btn"
                    onClick={e => this.getSpiritList(e)}>
                    Get Drinks
                </button>
                </p>
            </div>
        )
    }
}
  
const mapStateToProps = (state) => {
    return {
        drink: state.DrinkInfo.drink,
        spirit: state.DrinkInfo.spirit,
        picture: state.DrinkInfo.picture,
        isFave: state.DrinkInfo.isFave,
        drinks: state.DrinkInfo.drinks
    }
}

export default connect(mapStateToProps) (SpiritSearch)
