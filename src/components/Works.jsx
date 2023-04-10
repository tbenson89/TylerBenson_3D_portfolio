import { motion } from 'framer-motion'
import TiltProps from 'react-parallax-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

// TODO: Update from works -> projects
// TODO: Update motion.p -> description of section projects and work, to be mine!
// This one is for JNS projects website -> from john johnson https://camdas.com/jeunesse-global-website/ 
// https://scontent.fslc3-2.fna.fbcdn.net/v/t39.30808-6/291859138_359234186357060_1927382977895905379_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v4VfPjoTnOUAX9rBG6a&_nc_ht=scontent.fslc3-2.fna&oh=00_AfD3olyzLn-4OumXLparO0mBDUDxk5e3-urwlNvU6yimNA&oe=64155E76
// https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/292348185_359234183023727_1936875796673891171_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HdPsMCvwDbUAX9oSNyu&_nc_ht=scontent.fslc3-1.fna&oh=00_AfAwLYiQg7cb3TUWgvOgDrGUv3rg4t_eIvEpAjJcjBzddQ&oe=641551D6
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          The Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Check out these real-world projects that showcase my skills and experience. These projects demonstrate my ability to tackle complex problems,
          work with a variety of technologies, and effectively manage projects. Each project is accompanied by a brief description and links
          to code repositories and live demos, giving you a glimpse into my work and what I can bring to your project.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        }
      </div>
    </>
  )
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <TiltProps options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt={name} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </TiltProps>
    </motion.div>
  )
}

export default SectionWrapper(Works, "")