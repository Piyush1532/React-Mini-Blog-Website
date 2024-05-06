import React from 'react'

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
            cover:"https://wallpapercave.com/wp/wp12449500.jpg"

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
        <div className="right-content"></div>
      </section>
    </>
  )
}

export default BlogHomePg
