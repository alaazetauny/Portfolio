import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_xxx", "template_xxx", form.current, "public_key_xxx")
      .then(
        () => {
          setStatus("Nachricht erfolgreich gesendet!");
          form.current.reset();
        },
        () => {
          setStatus("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        },
      );
  };

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
          ref={form}
          onSubmit={sendEmail}
        >
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
          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
