import React from 'react'
import "./CTA.css"
import { motion } from 'framer-motion';
import useIntersection from './UseIntersection';

const CTA = () => {
    const { ref, inView } = useIntersection();
    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.7 }} className='Cta-section'>
      <div className="cta-box">
        <p className='sub-headings'>Landing for Corporate Housing</p>
        <p className="small-txt">From staffing firms and sports leagues to individual business travelers, our fully furnished aprtments are crafted to make your team feel instantly at home.</p>
        <div className="cta-btns">
          <button>Contact us</button>
          <button>Read more</button>
        </div>
      </div>
      <img loading='lazy' decoding='async' fetchpriority='low' className='cta-img' src={import.meta.env.BASE_URL + "/House.webp"} alt="HOUSE" />
        </motion.div>
  )
}

export default CTA
