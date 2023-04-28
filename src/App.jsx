import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> // TODO: WE need to rethink these ones. we need code to show and live deployed projects! */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;



// TODO: Movelinks below somewhere!
// Link1: https://www.turbosquid.com/
// Link2: https://sketchfab.com/features/free-3d-models
// Link3: https://free3d.com/3d-models/
// https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24
// https://sketchfab.com/3d-models/mech-drone-8d06874aac5246c59edb4adbe3606e0e
// https://sketchfab.com/3d-models/cyberpunk-laptop-concept-design-fddc4e68cc6c498b88b19af1a05bd420 <!-----!
// https://sketchfab.com/3d-models/hologram-console-bfbbb481e98e4be38774b1d0204c192c <!-----!
// https://sketchfab.com/3d-models/mercenary-hideout-spot-5c8edf1cba5c465492e15a5f1d840ec2
// https://sketchfab.com/3d-models/destroyed-car-07-raw-scan-916b51c7e5644eb2a6c9b3797ebb08cf
// https://sketchfab.com/3d-models/office-building-af9782245c134c21ae0c8df7f57077e6