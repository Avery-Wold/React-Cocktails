import React, { Component } from 'react';
import '../App.scss';

export class Drink extends Component {
    render() {
        return (
            <div>
                {this.props.drinks.map((drinks) => {
                    return(
                        <div className="drink">
                            <img src={drinks.strDrinkThumb} className="drink-img" alt="cocktail"/>
                            <div className="table">
                                <h1>
                                    {drinks.strDrink}
                                </h1>
                                <h2>
                                    What you'll need:
                                </h2>
                                <p>
                                    {drinks.strGlass}
                                </p>
                                <p>
                                    {drinks.strMeasure1} {drinks.strIngredient1}
                                </p>
                                <p>
                                    {drinks.strMeasure2} {drinks.strIngredient2}
                                </p>
                                <p>
                                    {drinks.strMeasure3} {drinks.strIngredient3}
                                </p>
                                <p>
                                    {drinks.strMeasure4} {drinks.strIngredient4}
                                </p>
                                <p>
                                    {drinks.strMeasure5} {drinks.strIngredient5}
                                </p>
                                <p>
                                    {drinks.strMeasure6} {drinks.strIngredient6}
                                </p>
                                <p>
                                    {drinks.strMeasure7} {drinks.strIngredient7}
                                </p>
                                <p>
                                    {drinks.strMeasure8} {drinks.strIngredient8}
                                </p>
                                <p>
                                    {drinks.strMeasure9} {drinks.strIngredient9}
                                </p>
                                <p>
                                    {drinks.strMeasure10} {drinks.strIngredient10}
                                </p>
                                <p>
                                    {drinks.strMeasure11} {drinks.strIngredient11}
                                </p>
                                <p>
                                    {drinks.strMeasure12} {drinks.strIngredient12}
                                </p>
                                <p>
                                    {drinks.strMeasure13} {drinks.strIngredient13}
                                </p>
                                <p>
                                    {drinks.strMeasure14} {drinks.strIngredient14}
                                </p>
                                <p>
                                    {drinks.strMeasure15} {drinks.strIngredient15}
                                </p>
                                <h2>
                                    Instructions:
                                </h2>
                                <p>
                                    {drinks.strInstructions}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}