import React from 'react'
import "./Features.css"
import { useState } from 'react'

const Features = () => {
  const featarr = [
    {num: "01",head: "Premier Corporate housing",para: "Our properties are strategically located in prime areas, providing easy access to business centers, amenities, and local attractions.",},
    {num: "02",head: "Find and book 100% online",para: "Find and book your corporate housing 100% online. Explore premium, fully furnished accommodations from home.",},
    {num: "03",head: "Dedicated local manager",para: "Get help from a dedicated local manager. Enjoy smooth support and great service during your stay.",},
  ]
  const [featarry, setfeatarry] = useState(featarr)
  return (
    <section className='features-main'>
      <p className="main-small-text">Corporate housing</p>
      <div className='sub-headings'
      >Elevate Community Engagement
      </div>
      <div className="features-box">
        <div className="features-text-box">
          {featarry.map((item, index) => {
            return (
              <div className='feature-box' key={index}>
                <div>
                  <span className='xsmall-headings'>{item.num}.</span>
                  <p className='xsmall-headings'>{item.head}</p>
                </div>
                <p className="small-txt">{item.para}</p>
                </div>
            )
          })}
        </div>
        <img loading='lazy' decoding='async' className='features-box-img' src={import.meta.env.BASE_URL + "/features.webp"} alt="People" />
      </div>
    </section>
  )
}

export default Features
