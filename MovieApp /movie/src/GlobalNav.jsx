import './globalNav.css';
import {setState} from 'react';
import { useState } from 'react';
import Menu from './Menu';



function GlobalNav({className, setPage}){

    const[showMenu, setShowMenu] = useState(false);
    const list = Menu.map(item =>{
        return(
            
        <li className="global-nav__item" key={item.name}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Yantramanav&display=swap');
            </style>
            <a className="global-nav__link" href={item.path} onClick={
                (e)=>{
                    e.preventDefault();
                    setPage(item.name);
                }
            }>
                {item.name}
            </a>
        </li>
        );
    });
        

    const menuClass = showMenu ? 'global-nav__list--open':'';
    return(
        <nav className={`${className} global-nav`}>
            <button className='global-nav__toggle'
            onClick={()=>setShowMenu(!showMenu)}>{showMenu ? "Close Menu" : "Open Menu"}</button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
               
            
        </nav>
    );
}
export default GlobalNav;