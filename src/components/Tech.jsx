import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"

// TODO: update tech stacks logo and names -> index variant constants
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon}  />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "")