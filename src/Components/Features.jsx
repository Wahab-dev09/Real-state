import React from 'react'
import "./Features.css"
import { useState } from 'react'
import { motion } from 'framer-motion';
import useIntersection from './UseIntersection';

const Features = () => {
  const featarr = [
    {num: "01",head: "Premier Corporate housing",para: "Our properties are strategically located in prime areas, providing easy access to business centers, amenities, and local attractions.",},
    {num: "02",head: "Find and book 100% online",para: "Find and book your corporate housing 100% online. Explore premium, fully furnished accommodations from home.",},
    {num: "03",head: "Dedicated local manager",para: "Get help from a dedicated local manager. Enjoy smooth support and great service during your stay.",},
  ]
  const [featarry, setfeatarry] = useState(featarr)
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const easing = [0.215, 0.610, 0.355, 1.000];
  const { ref, inView } = useIntersection();
  return (
    <section className='features-main'>
      <p className="main-small-text">Corporate housing</p>
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8, ease: easing}} className='sub-headings'>Elevate Community Engagement</motion.div>
      <div className="features-box">
        <div className="features-text-box">
          {featarry.map((item, index) => {
                        const delay = index * 0.3;
                        const { ref, inView } = useIntersection();
                        const variants = {
                          hidden: { opacity: 0, x: -70 },
                          visible: { opacity: 1, x: 0 },
                        };
            return (
                <motion.div key={item.num} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.7, delay: delay }} className='feature-box'>
                <div>
                  <span className='xsmall-headings'>{item.num}.</span>
                  <p className='xsmall-headings'>{item.head}</p>
                </div>
                <p className="small-txt">{item.para}</p>
                </motion.div>
            )
          })}
        </div>
        <img loading='lazy' decoding='async' className='features-box-img' src={import.meta.env.BASE_URL + "/features.webp"} alt="People" />
      </div>
    </section>
  )
}

export default Features
