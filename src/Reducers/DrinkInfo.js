export const DRINK_INFO_UPDATE_DRINK_NAME = "DRINK_INFO_UPDATE_DRINK_NAME";
export const DRINK_INFO_UPDATE_GLASS_NAME = "DRINK_INFO_UPDATE_GLASS_NAME";
export const DRINK_INFO_UPDATE_INSTRUCTIONS = "DRINK_INFO_UPDATE_INSTRUCTIONS";
export const DRINK_INFO_UPDATE_INGREDIENT1_NAME = "DRINK_INFO_UPDATE_INGREDIENT1_NAME";
export const DRINK_INFO_UPDATE_INGREDIENT2_NAME = "DRINK_INFO_UPDATE_INGREDIENT2_NAME";
export const DRINK_INFO_UPDATE_INGREDIENT3_NAME = "DRINK_INFO_UPDATE_INGREDIENT3_NAME";
export const DRINK_INFO_UPDATE_PICTURE = "DRINK_INFO_UPDATE_PICTURE";
export const DRINK_INFO_UPDATE_MEASURE1_NAME = "DRINK_INFO_UPDATE_MEASURE1_NAME";
export const DRINK_INFO_UPDATE_MEASURE2_NAME = "DRINK_INFO_UPDATE_MEASURE2_NAME";
export const DRINK_INFO_UPDATE_MEASURE3_NAME = "DRINK_INFO_UPDATE_MEASURE3_NAME";
export const DRINK_INFO_IS_FAVE = "DRINK_INFO_IS_FAVE";
export const DRINK_INFO_DRINKS = "DRINK_INFO_DRINKS";
export const DRINK_INFO_SPIRIT = "DRINK_INFO_SPIRIT";
export const DRINK_LIST = "DRINK_LIST";

const DrinkInfo = (state={}, action) => {
    switch(action.type){
        case DRINK_INFO_UPDATE_DRINK_NAME:
            return {...state, drink: action.payload }
        case DRINK_INFO_UPDATE_GLASS_NAME:
            return {...state, glass: action.payload }
         case DRINK_INFO_UPDATE_INSTRUCTIONS:
            return {...state, instructions: action.payload }
        case DRINK_INFO_UPDATE_INGREDIENT1_NAME:
            return {...state, ingredient1: action.payload }
        case DRINK_INFO_UPDATE_INGREDIENT2_NAME:
            return {...state, ingredient2: action.payload }
        case DRINK_INFO_UPDATE_INGREDIENT3_NAME:
            return {...state, ingredient3: action.payload }
        case DRINK_INFO_UPDATE_PICTURE:
            return {...state, picture: action.payload }
        case DRINK_INFO_UPDATE_MEASURE1_NAME:
            return {...state, measure1: action.payload }
        case DRINK_INFO_UPDATE_MEASURE2_NAME:
            return {...state, measure2: action.payload }
        case DRINK_INFO_UPDATE_MEASURE3_NAME:
            return {...state, measure3: action.payload }
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