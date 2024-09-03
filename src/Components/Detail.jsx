import React from 'react'
import "./Detail.css"
import { useState } from 'react'
import { motion } from 'framer-motion';
import useIntersection from './UseIntersection';

const Detail = () => {
    const svg1 = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 164, 164)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></svg>);
    const svg2 = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="rgb(78, 196, 160)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>);
    const svg3 = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="rgb(87, 66, 167)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>);
    const arr = [ 
        {head: "Exploration",para: "If something happens to your home - or any attached structures on your property - we will cover the repairs on the rebuild.",detsvg: svg1,},
        {head: "Work assignments",para: "It's not just stuff it's your life. And if there's ever a theft, fire or any other unfortunate event we'll help with the repair or replcement.",detsvg: svg2,},
        {head: "Entended stays",para: "Our coverage protects you from bodily injury or property damage or accidents to others (or their stuff) - at home or anywher else.",detsvg: svg3,},
    ]
    const [dettxt, setdettxt] = useState(arr)
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section className='details-section'>
            <span className='main-small-text'>how can we help</span>
            <p className='sub-headings'>Flexibility for your lifestyle</p>
            <div className="details-box">
                {dettxt.map((item, index) => {
                                        const delay = index * 0.2;
                                        const { ref, inView } = useIntersection();
                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={variants}
                            transition={{ duration: 0.5, delay: delay }}
                            className='detail'
                        >
                            {item.detsvg}
                            <p className='small-headings'>{item.head}</p>
                            <p className='small-txt'>{item.para}</p>
                            <div className="btn-txt">
                                <span className='cta-text'>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill='black'><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                            </div>
                        </motion.div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Detail
