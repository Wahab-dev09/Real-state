import React from 'react'
import "./CTA2.css"
import { motion } from 'framer-motion';
import useIntersection from './UseIntersection';
const CTA2 = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }
  const { ref, inView } = useIntersection();
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.7 }} className='Cta-section'>
      <div className="cta-box">
        <p className='sub-headings cta-head'>Subscribe to our newsletter</p>
        <p className="small-txt cta-txt">Subscribe to our newsletter for regular updates so that you can know more information about us</p>
        <form className="cta-input-btn" onSubmit={HandleSubmit}>
          <input type="text" placeholder='Enter your email' />
          <button type='submit' value='submit' className="cta2btn">Subscribe</button>
        </form>
      </div>
      <img loading='lazy' decoding='async' className='cta-img2' src={import.meta.env.BASE_URL + "/house2.webp"} alt="House" />
      </motion.div>
  )
}

export default CTA2
