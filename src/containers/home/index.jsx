import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("./contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Alaa
          <br />
          Full Stack developer
        </h1>
      </div>
      <div onClick={handleNavigateToContactMePage} className="home__contact-me">
        <button>Hiere Me</button>
      </div>
    </section>
  );
};
export default Home;
