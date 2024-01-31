import ContactList from "../components/contacts";
import MotionDiv from "../components/motion-div";

export default function Contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="Contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
          Feel free to reach me at the following links!
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}