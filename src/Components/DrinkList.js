import React, { Component } from 'react';
import '../App.scss';

export class DrinkList extends Component {
    render() {
        return(
            <div>
                <ul>
                {this.props.drinks.map((drinks) => {
                    return (
                        <div className="drink-list-div">
                        <h1>{this.props.spirit} drinks</h1>
                            <li key={drinks.strDrink}>{drinks.strDrink}
                            <img src={drinks.strDrinkThumb} className="drink-list" alt="cocktail"/>
                            </li>
                        </div>
                    );
                })}
                </ul>
            </div>
        );
    }
}