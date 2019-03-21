import {
    GET_DATA_IS_FETCHING,
    GET_DATA_HAS_ERRORS,
    GET_DATA_IS_SUCCESSFUL
} from '../Reducers/GetData';
import { 
    updateDrinks,
    updateIsFave,
    updateIsList 
} from './UpdateInfo';
import axios from 'axios';

const dataIsFetching = () => {
    return {
        type: GET_DATA_IS_FETCHING,
    }
}

const dataHasErrors = () => {
    return {
        type: GET_DATA_HAS_ERRORS
    }
}

const dataIsSuccessful = (data) => {
    return {
        type: GET_DATA_IS_SUCCESSFUL,
        payload: data
    }
}

export const getFave = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon+drop';
    return fetchData(url)
}

export const getDrink = (searchStr) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchStr;
    return fetchData(url)
}

export const getRandom = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    return fetchData(url)
}

export const getSpirit = (searchStr) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchStr;
    return fetchSpiritData(url)
}

const fetchData = (url) => {
    return (dispatch) => {
        dispatch(dataIsFetching());
        axios.get(url)
            .then((json) => (
                {
                    drinks: json.data.drinks,
                }
            ))
            .then((newData) => {
                dispatch(updateIsFave(true));
                dispatch(updateDrinks(newData.drinks));
                dispatch(dataIsSuccessful(newData));
            })
            .catch(() => {
                dispatch(dataHasErrors());
            })
    }
}

const fetchSpiritData = (url) => {
    return (dispatch) => {
        dispatch(dataIsFetching());
        axios.get(url)
            .then((json) => (
                {
                    drinks: json.data.drinks,
                }
            ))
            .then((newData) => {
                dispatch(updateIsList(true));
                dispatch(updateDrinks(newData.drinks));
                dispatch(dataIsSuccessful(newData));
            })
            .catch(() => {
                dispatch(dataHasErrors());
            })
    }
}