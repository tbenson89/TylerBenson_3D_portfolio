import React from 'react'
import TiltProps from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

// TODO: Update icons!
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Driven by Success, Tyler has achieved 7+ Super Star (Employee of the month) Awards working with a Global Development Team.
        He has brought top notch styling and clean and efficient code. Tyler is a thriving team player and natural born leader.
        Thriving to learn the latest Technologies you can often find him hiding away, face lit up by computer monitors working on
        smart contracts and web3 connections.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const ServiceCard = ({ index, title, icon }) => {
  return (
    <TiltProps className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={`The ${title} icon image`} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </TiltProps>
  )
}

export default SectionWrapper(About, "about")