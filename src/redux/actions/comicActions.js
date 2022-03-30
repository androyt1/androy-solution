import {GET_COMICS_FAILURE,GET_COMICS_REQUEST,GET_COMICS_SUCCESS,ADD_FAVOURITE_COMIC,REMOVE_FAVOURITE_COMIC} from '../types'
import axios from 'axios'


//load all comics from the server
export const getComics = () =>async(dispatch) => {
    //set the state to loading
    dispatch({
        type: GET_COMICS_REQUEST
    })
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    //get public key from process.env
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/comics?apikey=${process.env.REACT_APP_PUBLIC_KEY}`,config)
        
        dispatch({
            type: GET_COMICS_SUCCESS,
            payload: response.data.data.results
        })
    } catch (error) {
        dispatch({
            type: GET_COMICS_FAILURE,
            payload: error.response && error.response.data.message
        })
    }
}

export const addComic=(comic)=>{
    return{
        type: ADD_FAVOURITE_COMIC,
        payload: comic
    }
} 

export const removeComic=(comic)=>{
    return{
        type: REMOVE_FAVOURITE_COMIC,
        payload: comic
    }
}