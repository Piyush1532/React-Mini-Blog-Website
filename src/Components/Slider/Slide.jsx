import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from './SlideData';
import "./slide.css"

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <>
    <div className="slide">
    <Slider {...settings}>
        {Sdata.map((val)=>{
           return(
            <div className='box'>
                <div className="img">
                    <img src={val.cover} alt="" />
                </div>
                <div className="text">
                    <span>{val.category}</span>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                </div>
          </div>
           )
        })}
    
    </Slider>
    </div>

    </>
  )
}

export default Slide
