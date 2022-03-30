import {combineReducers} from 'redux'
import {comicReducer} from './reducers/comicReducer'
import {favoritesReducer} from './reducers/favoritesReducer'


//combine reducers to create the root reducer
export const rootReducer = combineReducers({
    allComics: comicReducer ,
    allFavorites: favoritesReducer
})