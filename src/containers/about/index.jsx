import React from "react";
import { Animate } from "react-simple-animate";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const personalDetails = [
  {
    label: "Name",
    value: "Alaa Zetauny",
  },
  {
    label: "Age",
    value: "42",
  },
  {
    label: "Address",
    value: "Stöteroggerstr 77,21339 Lüneburg",
  },
  {
    label: "Email",
    value: "alaachz.83@gmail.com",
  },
  {
    label: "Contact Me",
    value: "01793621862",
  },
];

const jobSummary =
  "I’m a Full Stack Developer who enjoys building web applications and learning new technologies. I like solving problems, writing clean code, and creating simple, user-friendly websites. I’m always excited to improve my skills and take on new challenges.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <h3>Full Stack Developer</h3>
        <p>{jobSummary}</p>
      </div>
    </section>
  );
};
export default About;
