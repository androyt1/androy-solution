import React,{useState} from "react";
import Favorites from "./Favorites";
import { useSelector } from "react-redux";

const Header = () => {


    const{favorites}=useSelector(state=>state.allFavorites)
    const[isOPen,setIsOpen]=useState(false)

    const handleIsOpen=()=>{   
        setIsOpen(!isOPen)
    }
    const closeToggle=()=>{
        setIsOpen(false)
    }

  return (
    <>
    <header className="site-header ">   
      <h1 className="site-heading">Red Ant Comics</h1>    
     <button className={`favourites-toggle  js-favourites-toggle  `} onClick={handleIsOpen}></button> 
     {/* <button className={`favourites-toggle2  js-favourites-toggle ${isOPen ? 'move': '' }  `} onClick={closeToggle}></button> */}
        {/*Create A span that displays the number of items in favorites  */}
     <span className="favorites-counter">{favorites && favorites.length}</span>     
    </header>
    <Favorites isOpen={isOPen}/>
    </>
  ); 
};

export default Header;
