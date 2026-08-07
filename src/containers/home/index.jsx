import React from "react";
import "./styles.scss";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Alaa
          <br />
          Full Stack developer
        </h1>
      </div>
      <div className="home__contact-me">
        <button>Hiere Me</button>
      </div>
    </section>
  );
};
export default Home;
