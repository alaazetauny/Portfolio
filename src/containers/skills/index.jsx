import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content-wrapper__inner-content">
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>
            <div>
              {item.data.map((skillsItem, j) => (
                <div className="progressbar-wrapper" key={j}>
                  <p>{skillsItem.skillName}</p>
                  <Line
                    percent={skillsItem.percentage}
                    strokeWidth="2"
                    strokeColor="var(--yellow-theme-main-color)"
                    trailWidth="2"
                    strokeLinecap="square"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
