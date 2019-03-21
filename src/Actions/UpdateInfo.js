import {
    DRINK_INFO_UPDATE_DRINK_NAME,
    DRINK_INFO_IS_FAVE,
    DRINK_INFO_DRINKS,
    DRINK_INFO_SPIRIT,
    DRINK_LIST
} from '../Reducers/DrinkInfo';

export const updateDrinkName = (drink) => {
    return {
        type: DRINK_INFO_UPDATE_DRINK_NAME,
        payload: drink
    };
}

export const updateIsFave = (isFave) => {
    return {
        type: DRINK_INFO_IS_FAVE,
        payload: isFave
    };
}

export const updateSpirit = (spirit) => {
    return {
        type: DRINK_INFO_SPIRIT,
        payload: spirit
    };
}

export const updateIsList = (isList) => {
    return {
        type: DRINK_LIST,
        payload: isList
    };
}

export const updateDrinks = (drinks) => {
    return {
        type: DRINK_INFO_DRINKS,
        payload: drinks
    }
}