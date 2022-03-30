import {GET_COMICS_FAILURE,GET_COMICS_REQUEST,GET_COMICS_SUCCESS} from '../types'

//Setting up the initial state
const initialState = {
    loading: false,
    comics: [],    
    error: null
}

//get comics reducer function
export const comicReducer = (state = initialState, action) => {
    //extracting the type of action and the payload
    const{type, payload} = action
    //switch statement to handle different actions
    switch(type){
        //if the action is GET_COMICS_REQUEST
        case GET_COMICS_REQUEST:
            return{
                ...state,
                loading: true
            }
        //if the action is GET_COMICS_SUCCESS
        case GET_COMICS_SUCCESS:
            return{
                ...state,
                loading: false,
                comics: payload
            }
        //if the action is GET_COMICS_FAILURE
        case GET_COMICS_FAILURE:
            return{
                ...state,
                loading: false,
                error: payload
            }        
       
        default:
            return state
    }
}