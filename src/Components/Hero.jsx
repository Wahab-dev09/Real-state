import React from 'react'
import "./Hero.css"
import { useState} from 'react'

const Hero = () => {
  const arr = [
    {dettxt: "50+",detname: "Employees"},
    {dettxt: "10+",detname: "Countries"},
    {dettxt: "35+",detname: "Finished Projects"},
    {dettxt: "21+",detname: "Offices"},
    {dettxt: "15+",detname: "Awarded Projects"}
  ]
  const [detailsarr, setdetailsarr] = useState(arr);
  return (
    <section className='hero-section'>
      <span className='main-small-text'>About us</span>
      <p>A proficient team with extensive knowledge</p>
      <div className="hero-img"></div>
      <div className="hero-det">
        <div className="scrolling-wrapper">
          {detailsarr.map((item, index) => {
            return (
              <div key={index} className='one-det'>
                <span>{item.dettxt}</span>
                <span>{item.detname}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
