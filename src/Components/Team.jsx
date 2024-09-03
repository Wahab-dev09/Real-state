import React from 'react'
import "./Team.css"
import { useState } from 'react';
import { motion, transform } from 'framer-motion';
import useIntersection from './UseIntersection';

const Team = () => {
  const arr = [
    {name: "Albert Flores",status: "Co-founder & CEO",img:"/p1.webp"},
    {name: "Alex Brown",status: "Co-founder & CTO",img:"/p2.webp"},
    {name: "Ben Clark",status: "UI/UX Designer",img:"/p3.webp"},
    {name: "Chris Davis",status: "Web Designer",img:"/p4.webp"},
    {name: "David Evans",status: "Front-end Developer",img:"/p5.webp"},
    {name: "Luke Harris",status: "Marketing Co",img:"/p6.webp"}
  ]
  const [teammem, setteammem] = useState(arr);
  const variant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const easing = [0.215, 0.610, 0.355, 1.000];
  const { ref, inView } = useIntersection();
  
  return (
    <section className='Team-main'>
      <span className="main-small-text">Our team</span>
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variant} transition={{ duration: 0.8, ease: easing}} className='sub-headings'>Meet our awesome team</motion.div>
      <div className="members-box">
        <div>
          {teammem.map((item, index) => {
            const delay = index * 0.2;
            const { ref, inView } = useIntersection();
            const variants = {
              hidden: { opacity: 0, y: 40},
              visible: { opacity: 1, y: 0},
            };
            return (
              <motion.div key={index} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.7, delay: delay }} className='member'>
                <img className='p-img' width='70px' height='70px' loading='lazy' decoding='async' src={`${import.meta.env.BASE_URL}${item.img}`} alt="Team-member" />
                <div className='member-txt-box'>
                  <span className="xsmall-headings">{item.name}</span>
                  <span className="xsmall-txt">{item.status}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
