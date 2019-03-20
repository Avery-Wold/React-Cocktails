import {
    GET_DATA_IS_FETCHING,
    GET_DATA_HAS_ERRORS,
    GET_DATA_IS_SUCCESSFUL    
}from '../Reducers/GetData';
import {
    DRINK_INFO_UPDATE_DRINK_NAME,
    DRINK_INFO_UPDATE_GLASS_NAME,
    DRINK_INFO_UPDATE_INSTRUCTIONS,
    DRINK_INFO_UPDATE_INGREDIENT1_NAME,
    DRINK_INFO_UPDATE_INGREDIENT2_NAME,
    DRINK_INFO_UPDATE_INGREDIENT3_NAME,
    DRINK_INFO_UPDATE_PICTURE,
    DRINK_INFO_UPDATE_MEASURE1_NAME,
    DRINK_INFO_UPDATE_MEASURE2_NAME,
    DRINK_INFO_UPDATE_MEASURE3_NAME,
    DRINK_INFO_IS_FAVE,
} from '../Reducers/DrinkInfo';
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

export const updateDrinkName = (drink) => {
    return {
        type: DRINK_INFO_UPDATE_DRINK_NAME,
        payload: drink
    };
}

export const updateGlassName = (glass) => {
    return {
        type: DRINK_INFO_UPDATE_GLASS_NAME,
        payload: glass
    };
}

export const updateInstructions = (instructions) => {
    return {
        type: DRINK_INFO_UPDATE_INSTRUCTIONS,
        payload: instructions
    };
}

export const updateIngredient1 = (ingredient1) => {
    return {
        type: DRINK_INFO_UPDATE_INGREDIENT1_NAME,
        payload: ingredient1
    };
}

export const updateIngredient2 = (ingredient2) => {
    return {
        type: DRINK_INFO_UPDATE_INGREDIENT2_NAME,
        payload: ingredient2
    };
}

export const updateIngredient3 = (ingredient3) => {
    return {
        type: DRINK_INFO_UPDATE_INGREDIENT3_NAME,
        payload: ingredient3
    };
}

export const updatePicture = (picture) => {
    return {
        type: DRINK_INFO_UPDATE_PICTURE,
        payload: picture
    };
}

export const updateMeasure1 = (measure1) => {
    return {
        type: DRINK_INFO_UPDATE_MEASURE1_NAME,
        payload: measure1
    };
}

export const updateMeasure2 = (measure2) => {
    return {
        type: DRINK_INFO_UPDATE_MEASURE2_NAME,
        payload: measure2
    };
}

export const updateMeasure3 = (measure3) => {
    return {
        type: DRINK_INFO_UPDATE_MEASURE3_NAME,
        payload: measure3
    };
}

export const updateIsFave = (isFave) => {
    return {
        type: DRINK_INFO_IS_FAVE,
        payload: isFave
    };
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

const fetchData = (url) => {
    return (dispatch) => {
        dispatch(dataIsFetching());
        axios.get(url)
        .then((json) => (
            {
                drink: json.data.drinks[0].strDrink,
                glass: json.data.drinks[0].strGlass,
                instructions: json.data.drinks[0].strInstructions,
                picture: json.data.drinks[0].strDrinkThumb,
                ingredient1: json.data.drinks[0].strIngredient1,
                ingredient2: json.data.drinks[0].strIngredient2,
                ingredient3: json.data.drinks[0].strIngredient3,
                measure1: json.data.drinks[0].strMeasure1,
                measure2: json.data.drinks[0].strMeasure2,
                measure3: json.data.drinks[0].strMeasure3,
            }
        ))
        .then((newData) => {
            dispatch(updateIsFave(true))
            dispatch(updateDrinkName(newData.drink));
            dispatch(updateGlassName(newData.glass));
            dispatch(updateInstructions(newData.instructions));
            dispatch(updatePicture(newData.picture));
            dispatch(updateIngredient1(newData.ingredient1));
            dispatch(updateIngredient2(newData.ingredient2));
            dispatch(updateIngredient3(newData.ingredient3));
            dispatch(updateMeasure1(newData.measure1));
            dispatch(updateMeasure2(newData.measure2));
            dispatch(updateMeasure3(newData.measure3));
            dispatch(dataIsSuccessful(newData));
        })
        .catch(() => {
            dispatch(dataHasErrors());
        })
    }
}