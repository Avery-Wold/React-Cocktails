export const DRINK_INFO_UPDATE_DRINK_NAME = "DRINK_INFO_UPDATE_DRINK_NAME";
export const DRINK_INFO_IS_FAVE = "DRINK_INFO_IS_FAVE";
export const DRINK_INFO_DRINKS = "DRINK_INFO_DRINKS";
export const DRINK_INFO_SPIRIT = "DRINK_INFO_SPIRIT";
export const DRINK_LIST = "DRINK_LIST";

const DrinkInfo = (state={}, action) => {
    switch(action.type){
        case DRINK_INFO_UPDATE_DRINK_NAME:
            return {...state, drink: action.payload }
        case DRINK_INFO_IS_FAVE:
            return {...state, isFave: action.payload}
        case DRINK_INFO_DRINKS:
            return {...state, drinks: action.payload} 
        case DRINK_INFO_SPIRIT:
            return {...state, spirit: action.payload} 
        case DRINK_LIST:
            return {...state, isList: action.payload}  
        default:
            return state;
    }
}

export default DrinkInfo;