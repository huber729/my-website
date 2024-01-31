import MotionText from "../components/motion-text";

export default function Intro() {
  return (
    <section className="my-8 flex flex-col items-center justify-center" id="intro">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Welcome to My Page</MotionText>
      </h1>
    </section>
  );
}