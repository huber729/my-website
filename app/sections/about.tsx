import MotionDiv from "../components/motion-div";

export default function About() {

  return (
    <section
      id="About"
    >
        <MotionDiv delayOffset={0.9}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={1}>
            <p>
              Hello, I'm Collin, a web developer from Indianapolis. Over the past year I have dedicated my time to learning full-stack development. I am passionate about learning new developer tools and diving into challenging projects. This website highlights some of my projects and skills I have acquired.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={1.1}>
            <p>
              When I am not teaching myself, I work a full-time job at a bank. I am on a journey to transition into a full-time development role, aiming to further refine my skills and contribute meaningfully to the tech world.</p>
          </MotionDiv>
          <MotionDiv delayOffset={1.2}>
            <p>
              Outside of work and programming, I have passions that revolve around weightlifting and marathon traing. Everyday I try to get in some form of exercise and I enjoy going on a daily run around the beautiful city of Indianapolis!
            </p>
          </MotionDiv>
        </article>
    </section>
  );
}