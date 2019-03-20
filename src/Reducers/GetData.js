export const GET_DATA_IS_FETCHING = "GET_DATA_IS_FETCHING";
export const GET_DATA_HAS_ERRORS = "GET_DATA_HAS_ERRORS";
export const GET_DATA_IS_SUCCESSFUL = "GET_DATA_IS_SUCCESSFUL";

const GetData = (state = {}, action) => {
    switch(action.type){
        case GET_DATA_IS_FETCHING:
            return {...state, isFetching: true}
        case GET_DATA_HAS_ERRORS:
            return {...state, isFetching: false, hasErrors: true, isSuccessful: false}
        case GET_DATA_IS_SUCCESSFUL:
            return {...state, isFetching: false, hasErrors: false, isSuccessful: true, data: action.payload}
        default:
            return state;
    }
}

export default GetData;