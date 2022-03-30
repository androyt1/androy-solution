import React,{useEffect} from 'react'
import './css/main.css' 
import {getComics} from '../redux/actions/comicActions'
import {useDispatch,useSelector} from 'react-redux'
import not_available from './images/not_available.jpg'
import {addComic} from '../redux/actions/comicActions'
import {ToastContainer} from 'react-toastify'

const Main = () => { 

    const dispatch = useDispatch()
    const {comics,loading,error} = useSelector(state => state.allComics)
    const{favorites}=useSelector(state=>state.allFavorites)

    error && console.log(error)
    

    useEffect(()=>{ 
        dispatch(getComics())
    },[dispatch])
 

  return (
    <main className="site-content">
        
        {error && <div className="error" style={{color:"red"}}>{error}</div>}
        {loading && <div className="loading">Loading...</div>}

    <ul id="comics-list" className="comics-list">
        
      {
          comics && comics.map(comic=>{
              return(
              <div key={comic.id}>
                   <li className="comic-item">
                <div className="comic-card">
                    <img src={comic && comic.thumbnail.path ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`: not_available }  alt={comic.series.name}/>
                    <h2 className='py-2 font-bold'>{comic.series.name}</h2>
                    <button className="button js-add " onClick={()=>dispatch(addComic(comic))}>Add to favourites</button>
                </div>
            </li>
                  {/* <span>{comic.series.name}</span>
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                  {console.log(`${comic.thumbnail.path}.${comic.thumbnail.extension}`)} */}
                </div>
              )
          })
      }


            Template for list items:
            <li className="comic-item">
                <div className="comic-card">
                    <img src="..."  alt="Comic"/>
                    <h2>Comic name</h2>
                    <button className="button js-add">Add to favourites</button>
                </div>
            </li>
       
    </ul>
    <ToastContainer/>
</main>
  )
}

export default Main