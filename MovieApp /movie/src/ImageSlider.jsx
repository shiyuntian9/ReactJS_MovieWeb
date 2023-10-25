import React from "react";
import { useState } from "react";
import SliderData from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from'react-icons/fa';
import './ImageSlider.css';

const ImageSlider = ({slides}) =>{
    const[current, setCurrent]= useState(0);
    const length = slides.length;

    const nextSlide=()=>{
        setCurrent(current === length -1 ? 0: current +1);
    }

    const prevSlide=()=>{
        setCurrent(current === 0? length -1 : current -1);
    }
    const list = SliderData.map((item,index) =>{
        return(
        <div key={item.name}>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            <div className={index === current? 'slide active':'slide'} key={index}>
                {index ===current && <img src={item.image} alt="movie image" className="image"/>}
            </div>
            
        </div>
        );
    });

    return (
        <div className="slider">
            <div className="slider-item">
                {list} 
            </div>
            
        </div>
        
    )
}

export default ImageSlider;