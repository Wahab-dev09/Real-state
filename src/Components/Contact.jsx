import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion';
import useIntersection from './UseIntersection';

const Contact = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  const easing = [0.215, 0.610, 0.355, 1.000];
  const { ref, inView } = useIntersection();
  return (
    <section className='contact-main'>
      <div className="contact-sec-head">
        <span className='main-small-text contact-sm-txt'>Get in touch</span>
        <motion.p ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8, ease: easing }} className='sub-headings contact-heading'>Have any Question? Contact us.</motion.p>
        <div className="contact-call-txt">E-mail or call the Landing Corporate Housing team at <span>205-236-8653</span></div>
      </div>
      <form className="contact-sec-form" onSubmit={HandleSubmit}>
        <p className='small-headings'>Enter your details</p>
        <div className="formdet">
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants2} transition={{ duration: 0.8, delay: 0 }}><span className='xsmall-headings'>First name</span><input placeholder='First name' type="text" /></motion.div>
          <motion.div  ref={ref}  initial="hidden"  animate={inView ? "visible" : "hidden"}  variants={variants2}  transition={{ duration: 0.8, delay: 0.2 }}><span className='xsmall-headings'>Last name</span><input placeholder='Last name' type="text" /></motion.div>
        </div>
        <div className="formdet">
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants2} transition={{ duration: 0.8, delay: 0.4 }}><span className='xsmall-headings'>Company name</span><input placeholder='Company name' type="text" /></motion.div>
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants2} transition={{ duration: 0.8, delay: 0.6 }}><span className='xsmall-headings'>E-mail address</span><input placeholder='E-mail address' type="text" /></motion.div>
        </div>
        <div className="formdet">
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants2} transition={{ duration: 0.8, delay: 0.8 }}><span className='xsmall-headings'>Phone number</span><input placeholder='Phone number' type="text" /></motion.div>
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants2} transition={{ duration: 0.8, delay: 1 }}><span className='xsmall-headings'>Country name</span><input placeholder='Country name' type="text" /></motion.div>
        </div>
        <button type='submit' value='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
