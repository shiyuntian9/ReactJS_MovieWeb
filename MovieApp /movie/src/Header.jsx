import './Header.css';
import GlobalNav from './GlobalNav';
import PopUpForm from './PopUpForm';

function Header({setPage}){
    return(
        <header className='header'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Yantramanav&display=swap');
            </style>   
            
            <div className='title-header' >
                <PopUpForm className="pop-form"/>
                <img src="logo.jpg" className='header__cat' alt='The cutest cat' />
                <h1 className='header__title'>CatFlix</h1>
                
            </div>
            
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}

export default Header;