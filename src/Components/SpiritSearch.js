import React, { Component } from 'react';
import '../App.scss';
import { getSpirit } from '../Actions/DrinkInfo';
import { updateSpirit } from '../Actions/UpdateInfo';
import { connect } from 'react-redux';
import SpiritInput from './SpiritInput';
import FormErrors from './FormErrors';

class SpiritSearch extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            formErrors: {
              validSpirit: ''
            },
            isSpiritValid: false,
            showFormErrors: false
        }     
    }

    getSpiritList = (e) => {
        e.preventDefault();    
        let newFormErrors = this.state.formErrors;
        let validSpirit = this.state.isSpiritValid;
        const {dispatch} = this.props;    
        if (this.props.spirit !== ""){
            dispatch((getSpirit(this.props.spirit))); 
        }
        else {
            newFormErrors.validSpirit = 'Please enter a valid spirit name';
            this.setState({formErrors: newFormErrors, showFormErrors: true, isSpiritValid: validSpirit});
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({showFormErrors: false});
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
                {(!this.state.isSpiritValid) && this.state.showFormErrors && <FormErrors errors={this.state.formErrors} />}
            </div>
        )
    }
}
  
const mapStateToProps = (state) => {
    return {
        spirit: state.DrinkInfo.spirit,
        isFave: state.DrinkInfo.isFave,
        drinks: state.DrinkInfo.drinks
    }
}

export default connect(mapStateToProps) (SpiritSearch)
