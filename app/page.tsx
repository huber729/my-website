import Intro from "./sections/intro";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contacts";
import MotionDiv from "./components/motion-div";

export default function Home() {
  return (
    <>
      <Intro/>
      <div className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16">
        <div className="md:order-2 lg:order-1 lg:w-2/3 space-y-8">
          <About/>
          <Projects/>
        </div>
        <div className="md:order-1 lg:order-2 lg:w-1/3">
          <MotionDiv delayOffset={.9}>
            <h2 className="mb-3 w-full text-center md:mb-6">My Skills</h2>
          </MotionDiv>
          <Skills/>
        </div>  
      </div>
      <Contact/>
    </>  
  );
}
