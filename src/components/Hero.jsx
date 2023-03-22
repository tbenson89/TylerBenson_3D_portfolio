import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


/* TODO: I want to replace the main object 3d model to be something more my style, hmmmm */
// Note: It looks like we'll have to rebuild / update the ComputerCanvas comp.
// Link1: https://www.turbosquid.com/
// Link2: https://sketchfab.com/features/free-3d-models
// Link3: https://free3d.com/3d-models/
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, <span className='text-[#915eff]'>World</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 pr-5`}>
            I Develop 3D Visuals, User Interfaces, and Web Applications
            <br />
            <span className='text-sm'>"Aim for the Stars, and when you get there AIM higher" - Tyler Benson</span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px[ h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className='w-3 h-3 rounded-full bg-secondary mg-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero