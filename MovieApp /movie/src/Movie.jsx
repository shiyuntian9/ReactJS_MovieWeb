import './Movie.css';
import {setState} from 'react';
import { useState } from 'react';

const menu = [
    {
        name:"Spider Man",
        text: "Director: Jon Watts",
        path:"spiderman.jpg",
        back:"Home",

    },
    {
        name:"Moon Knight",
        text:"Director: Mohamed Diab",
        path:"MoonKnight.jpg",
        back:"Home",
    },
    {
        name:"Bat Man",
        text:"Director: Christopher Nolan",
        path:"Batman.jpg",
        back:"Home",
    },

];


function Movie({setPage}){
    const list = menu.map(item =>{
        return(
            <li className="card__item" key={item.name} >
                <img className="card-picture" src={item.path} alt="cute cat"/>
                <h2 className="card-title">{item.name}</h2>
                <p>{item.text}</p>
                <a className="card-link" href="#" onClick={
                    (e)=>{
                        e.preventDefault();
                        setPage(item.back);
                    }
                 }> 
                 Back to Home
                </a>
            </li>
            
        );
    } ); 

    
    return(
        <>
            
            <ul className="card__list">
                {list}
            </ul>
        </>
    )
    
}
export default Movie;