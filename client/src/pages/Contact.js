import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main>
      <div className="h-16 text-4xl"></div>
      <p className="text-2xl p-4 m-4 bg-gray-800">
        Looking to hire a full stack developer?
      </p>
      <p className="text-xl p-4 m-4">
        Need someone to create or manage a website for you?
      </p>
      <p className="text-xl p-4 m-4">Code need some testing?</p>
      <p className="text-xl p-4 m-4">
        Need a team player who knows how to keep a positive atmosphere?
      </p>
      <p>Contact me here:</p>
      <ContactForm />
    </main>
  );
}

export default Contact;
