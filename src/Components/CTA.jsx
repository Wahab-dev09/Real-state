import React from 'react'
import "./CTA.css"

const CTA = () => {
  return (
    <div className='Cta-section'>
      <div className="cta-box">
        <p className='sub-headings'>Landing for Corporate Housing</p>
        <p className="small-txt">From staffing firms and sports leagues to individual business travelers, our fully furnished aprtments are crafted to make your team feel instantly at home.</p>
        <div className="cta-btns">
          <button>Contact us</button>
          <button>Read more</button>
        </div>
      </div>
      <img className='cta-img' src={import.meta.env.BASE_URL + "/house.png"} alt="HOUSE" />
        </div>
  )
}

export default CTA
