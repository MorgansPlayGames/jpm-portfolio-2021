import "./styles.css";

function ContactForm() {
  return (
    <form id="contactForm">
      <section>
        <label htmlFor="contact-who">Reason for contact?</label>
        <select id="contact-who" name="contact-who">
          <option value="connect">Want to talk or give me suggestions?</option>
          <option value="recruiter">Looking to hire a junor developer.</option>
          <option value="webconsulting">Need me to create a website?</option>
          <option value="other">
            Other option that I have not thought of?!
          </option>
        </select>
      </section>
      <section>
        <label htmlFor="contact-name">What should I call you?</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Jane Doe"
          name="contact-name"
        ></input>
      </section>
      <section>
        <label htmlFor="contact-email">Could I get an email?</label>
        <input
          id="contact-email"
          type="text"
          placeholder="email@email.com"
          name="contact-email"
        ></input>
      </section>
      <section>
        <label htmlFor="contact-linkedin">Got a linkedIn?</label>
        <input
          id="contact-linkedin"
          type="text"
          placeholder="email@email.com"
          name="contact-linkedin"
        ></input>
      </section>
      <section>
        <label htmlFor="contact-message">
          Please input your message please:
        </label>
        <textarea
          id="contact-message"
          type="text"
          name="contact-message"
          placeholder="Say hi!"
          rows="8"
          cols="40"
        ></textarea>
      </section>
      <section>
        <input type="submit" value="Submit" />
      </section>
    </form>
  );
}

export default ContactForm;
