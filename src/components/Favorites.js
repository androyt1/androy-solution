import React from 'react'
import {removeComic} from '../redux/actions/comicActions'
import { useSelector ,useDispatch} from 'react-redux'
import {toast} from 'react-toastify'

const Favorites = ({isOpen}) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.allFavorites)
    const {favorites} = state
    

  return (
    <div id="favourites-panel" className={`favourites-panel ${isOpen ? 'open' : 'close' }`}>
    <div className="favourites-header">
        <h2>Favourites</h2>
        <button className="close js-close"></button>
    </div>
    <div className="favourites-content">

        <ul className="favourites-list">
            {favorites && favorites.map(comic=>{
                return(
                   <li key={comic.id}>
                       <span>{comic.series.name}</span>
                       <button className='remove js-remove' onClick={()=>dispatch(removeComic(comic))}></button>
                   </li>
                )
            })} 
           
        </ul>
    </div>
</div>
  )
}

export default Favorites