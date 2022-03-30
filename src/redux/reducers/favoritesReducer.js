import { toast } from 'react-toastify'
import {ADD_FAVOURITE_COMIC,REMOVE_FAVOURITE_COMIC} from '../types'

const initialState={
    favorites:[],
    loading:false,
    error:null
}

export const favoritesReducer = (state=initialState,action)=>{
    const{type,payload}=action
    switch(type){
        case ADD_FAVOURITE_COMIC:
            //check if the item is already added
            let fav=state.favorites.filter(fav=>fav.id===payload.id)
            //if it is alreadyy added, return the state
            if(fav.length>0){
                toast.error("Comic is already is Added")
                return state
            }
            //if it is not added, add it to the favorites
            else{
                return{
                    ...state,
                    favorites:[...state.favorites,payload]
                }
            }
           
        case REMOVE_FAVOURITE_COMIC:
            //filter the item from the favorites
            return{
                ...state,
                favorites:state.favorites.filter(fav=>fav.id!==payload.id)
            }
        default:
            return state
    }
}