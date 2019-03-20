import React, { Component } from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../App.scss';

export class Drink extends Component {
    render() {
        return(
            <div className="drink">
                <img src={this.props.picture} className="drink-img" alt="cocktail"/>
                <div className="table">
                    <h1>
                        {this.props.drink}
                    </h1>
                    <h2>
                        What you'll need:
                    </h2>
                    <p>
                        {this.props.glass}
                    </p>
                    <p>
                        {this.props.measure1} {this.props.ingredient1}
                    </p>
                    <p>
                        {this.props.measure2} {this.props.ingredient2}
                    </p>
                    <p>
                        {this.props.measure3} {this.props.ingredient3}
                    </p>
                    <h2>
                        Instructions:
                    </h2>
                    <p>
                        {this.props.instructions}
                    </p>
                </div>
            </div>
        )
    }
}