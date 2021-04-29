import "./styles.css";
import { API } from "./API";
import { useEffect, useState } from "react";

function ContactForm() {
  function resubmitCheck() {
    let time = localStorage.getItem("time");
    if (!time) {
      setErrorMessage({ contact: "show" });
    } else {
      let dateCheck = new Date(time);
      let today = new Date();
      if (today.getDate() !== dateCheck.getDate()) {
        setErrorMessage({ contact: "show" });
        localStorage.removeItem("time");
      }
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function handleSubmit(event) {
    event.preventDefault();
    let data = event.target;
    const payload = {};
    payload.name = data[1].value;
    payload.who = data[0].value;
    payload.email = data[2].value;
    let emailValid = validateEmail(payload.email);
    payload.linkedIn = data[3].value;
    payload.message = data[4].value;
    if (payload.name !== "" && emailValid) {
      API.contactFormSend(payload)
        .then((res) => {
          setErrorMessage({
            emailError: "hidden",
            nameError: "hidden",
            contact: "hidden",
          });
          console.log("Thank you for your submission!");
          let time = new Date();
          localStorage.setItem("time", time);
        })
        .catch((err) => {
          // probably need a better way to notify on this error
          // console.log("err", err);
        });
    } else if (payload.name === "" && !emailValid) {
      setErrorMessage({
        emailError: "show",
        nameError: "show",
      });
    } else if (payload.name === "") {
      setErrorMessage({
        emailError: "hidden",
        nameError: "show",
      });
    } else {
      setErrorMessage({
        emailError: "show",
        nameError: "hidden",
      });
    }
  }

  const [errorMessage, setErrorMessage] = useState({
    emailError: "hidden",
    nameError: "hidden",
    contact: "hidden",
  });

  useEffect(()=> {
    resubmitCheck()
  }, [])

  return (
    <>
      {errorMessage.contact !== "hidden" ? (
        <form id="contactForm" onSubmit={handleSubmit}>
          <section>
            <label htmlFor="contactWho">Reason for contact?</label>
            <select id="contactWho" name="contactWho">
              <option value="connect">
                Want to talk or give me suggestions?
              </option>
              <option value="recruiter">
                Looking to hire a junor developer.
              </option>
              <option value="webconsulting">
                Need me to create a website?
              </option>
              <option value="other">
                Other option that I have not thought of?!
              </option>
            </select>
          </section>
          <section>
            <label htmlFor="contactName">What should I call you?</label>
            <input
              id="contactName"
              type="text"
              placeholder="Jane Doe"
              name="contactName"
            />
            {errorMessage.nameError === "show" ? (
              <sub id="nameError" className="errorMsg">Please enter a name</sub>
            ) : null}
          </section>
          <section>
            <label htmlFor="contactEmail">Could I get an email?</label>
            <input
              id="contactEmail"
              type="text"
              placeholder="email@email.com"
              name="contactEmail"
            />
            {errorMessage.emailError === "show" ? (
              <sub id="emailError" className="errorMsg">Please enter a valid email</sub>
            ) : null}
          </section>
          <section>
            <label htmlFor="contactLinkedin">Got a linkedIn?</label>
            <input
              id="contactLinkedin"
              type="text"
              placeholder="Longlinkedinurl"
              name="contactLinkedin"
            />
          </section>
          <section>
            <label htmlFor="contactMessage">
              Please input your message please:
            </label>
            <textarea
              id="contactMessage"
              type="text"
              name="contactMessage"
              placeholder="Say hi!"
              rows="8"
              cols="40"
            />
          </section>
          <section>
            <input type="submit" value="Submit" />
          </section>
        </form>
      ) : (
        <section>
          <p>Thank you for your message!</p>
        </section>
      )}
    </>
  );
}

export default ContactForm;
