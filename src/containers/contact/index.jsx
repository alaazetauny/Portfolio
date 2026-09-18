import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>

        <form
          className="contact__content__form"
          action="https://formsubmit.co/alaachz.83@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Neue Kontaktanfrage" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="contact__content__form__controlswrapper">
            <div>
              <input
                id="name"
                required
                name="name"
                className="inputName"
                type="text"
              />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                id="email"
                required
                name="email"
                className="inputEmail"
                type="email"
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                id="message"
                required
                name="message"
                className="inputDescription"
                rows="5"
              />
              <label htmlFor="message" className="descriptionLabel">
                Message
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
