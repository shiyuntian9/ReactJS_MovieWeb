
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import SliderData from './SliderData';
import ReactSwitch from "react-switch";
import { createContext } from 'react';
export const ThemeContext = createContext("null");




function App() {
  const[theme, setTheme] = useState('dark');
  const[page, setPage] = useState('Home');
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='app' id={theme} >
        <a className='skip-nav-link' href="#main-content">
          Skip to the main
        </a>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
          
        </div>
        <div id='main-content'>
          <Header setPage={setPage}/>
          <ImageSlider slides={SliderData}/>
          <Main  page={page} setPage={setPage} />
          <Footer setPage={setPage}/>
        </div>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
