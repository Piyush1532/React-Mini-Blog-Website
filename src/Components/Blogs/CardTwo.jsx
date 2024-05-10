import React from 'react'
import Sdata from '../Slider/SlideData'
import "../Slider/slide.css"

const CardTwo = () => {
  return (
    <>
      <div className="CardTwo top slide">
        {Sdata.map((val)=>{
           return(
            <div className='box'>
                <div className="img img2">
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
    
    
    </div>
    </>
  )
}

export default CardTwo
