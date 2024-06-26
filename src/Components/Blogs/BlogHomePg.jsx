import React from 'react'
import Slide from '../Slider/Slide'
import Card from './Card'
import Footer from '../Footer/Footer'
import CardTwo from './CardTwo'


const BlogHomePg = () => {

    const data=[
        {
            id:1,
            titleOne:"You Can Change The World",
            titleTwo:"Strong Style",
            paraOne:"How Women Are Redirecting Hollywood",
            paraTwo:"New Deadpool and Wolvorine to Make Marvel great Again",
            name:"Jason Smith",
            subTitle:"How to Invest MindFully",
            qrCode:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXjM6pC-IwNCHg3H8IoonZRLsYyrJ56qdhclZeHttzw&s",
            cover:"https://variety.com/wp-content/uploads/2022/09/Elizabeth-Olsen-Variety-Power-of-Women-16x9-2.jpg"

        }
    ]
  return (
    <>
      <section className='home'>

        <div className="left-content">
        {
          data.map((val)=>{
            return(
              <div className="content">
                <div className="logo">
                  <h1>M</h1>
                </div>
                <div className="homeImg">
                  <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h1>{val.titleOne}</h1>
                    <p>{val.paraOne}</p>
                    <span>{val.name}</span>
                  </div>
                  <div className="text text2">
                    <h1>{val.titleTwo}</h1>
                    <p>{val.paraTwo}</p>
                    <span>{val.subTitle}</span>
                  </div>
                  <div className="qrcode">
                    <img src={val.qrCode} alt="" />
                  </div>
              </div>
            )
          })
        }
        </div>
        <div className="right-content">
          <Slide/>
          <Card/>
          <CardTwo/>
          <Footer/>
        </div>
      </section>
    </>
  )
}

export default BlogHomePg
