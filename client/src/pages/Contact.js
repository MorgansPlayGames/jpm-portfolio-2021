function Contact() {
  return (
  <main>
    <div className="h-16 text-4xl"></div>
    <p className="text-2xl p-4 m-4 bg-gray-800">Looking to hire a full stack developer?</p>
    <p className="text-xl p-4 m-4">Need someone to create or manage a website for you?</p>
    <p className="text-xl p-4 m-4">Code need some testing?</p>
    <p className="text-xl p-4 m-4">Need a team player who knows how to keep a positive atmosphere?</p>
    <p className="text-xl p-4 m-4">How about someone who can run tabletop games as cooperative group problem solving exersize?</p>
    <p>Contact me here:</p>
    <a className="text-green-800" href="mailto:jpmaster13@gmail.com">Jpmaster13@gmail.com</a>
    <img src={process.env.PUBLIC_URL + 'ParkerHeadshot2.jpg'} className=' max-w-lg m-auto p-4'/>
  </main>
  )
}

export default Contact;
