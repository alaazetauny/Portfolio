import React from "react";
import { Animate } from "react-simple-animate";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";

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
        <div className="about__content__personalWrapper">
          <h3>Full Stack Developer</h3>
          <p>{jobSummary}</p>
          <h3 className="personalInformation">Personal Information</h3>
          <ul>
            {personalDetails.map((item, index) => (
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
