import React, { Component } from 'react';
import './App.scss';
import { Drink } from './Components/Drink';
import { getFave } from './Actions/DrinkInfo';
import { connect } from 'react-redux';
import Header from './Components/Header';
import Random from './Components/Random';
import CocktailSearch from './Components/CocktailSearch';
import SpiritSearch from './Components/SpiritSearch';
import DrinkList from './Components/DrinkList';

class App extends Component {
  constructor(props) {
    super(props);
  
  }

  getAveryFave = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch((getFave()));
  }

  render() {
    const { spirit, drinks, isFave, isList } = this.props;

    if (!isFave && !isList) {
      return (
        <div className="App">
          <Header />
          <img src="https://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg" className="drink-home1" alt="cocktail" />
          <div className="App-intro">
            <h1>Welcome!</h1>
            <p>
              Mixology is popular, have you been wanting to try to mix your own cocktails?  Let's
              get started!  You will be able to select a spirit you would like to use, or enter the
              name of a cocktail you like and want to try making yourself.  If you just want to see
              what Avery's favorite is, just click the button below!
            </p>
          </div>
          <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" className="drink-home2" alt="cocktail" />
          <button
            className="btn-fave"
            onClick={e => this.getAveryFave(e)}>
            Avery's favorite
          </button>
          <div className="select-drink">
            <CocktailSearch />
            <Random />
            <SpiritSearch />
          </div>
        </div>
      );
    }

    if (isFave) {
      return (
        <div className="App">
          <Header />
          <Drink  drinks={drinks}/>
        </div>
      );
    }

    if (isList) {
      return (
        <div className="App">
          <Header />
          <DrinkList spirit={spirit} drinks={drinks} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isFave: state.DrinkInfo.isFave,
    isList: state.DrinkInfo.isList,
    drinks: state.DrinkInfo.drinks,
    spirit: state.DrinkInfo.spirit
  }
}

export default connect(mapStateToProps)(App);
