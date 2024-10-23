import Image from "next/image"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    {/* header section */}
    <Header />
    {/* hero section */}
    <Hero />
    {/* about Me section */}
    <section
    id="about" 
    className="p-8 md:p-16 bg-yellow">
      <div className="container mx-auto text-center p-6 shadow-md bg-gradient-to-r from-orange-300 via-red-400 to-lime-400">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Hello, I'm <b>Shagufta Zakir</b>, a passionate about coding<br />
          and always eager to explore new web technologies.<br />
          I specialize in <b>front-end development</b> and <br />love building
          user-friendly expreriences.<br />I believe in the power of <b>technology </b> 
          to solve real-world problems. 
        </p>
      </div>
    </section>
    {/* portfolio section */}
    <section id="Portfolio"
    className="p-8 md:p-16 bg-gradient-to-r from-orange-300 via-red-400 to-lime-400 ">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Portfolio
         </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Here are few projects I've worked on, showcasing my journey
          in development. These projects reflect the skills I've acquired and passion
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <div className="bg-white p-6 shadow-lg rounded-lg transition white">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">
                Project 1
              </h3>
              <p>Web page<br />This web page build with HTML and CSS.
              The web page incorporates a clean layout, navigation menu and dynamic section. 
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">
                Project 2
              </h3>
              <p>Analog-Clock<br />Desing and implemented a functional analog clock using
               HTML CSS and JavaScript. This clock display real-time updates.
               </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">
                Project 3
              </h3>
              <p>Validation Form <br /> Created an interactive from with real-time input
              validation using HTML5 CSS and JavaScript.Ths from includes multiple input feilds.
              </p>
            </div>
          </div>
      </div>
    </section>
    {/* contact section */}
    <section 
    id="contact" 
    className="p-8 md:p-16 bg-gradient-to-r  from-orange-300 via-red-400 to-lime-400 ">
      <div className="container mx-auto text-center bg-white p-6 shadow-lg ">
        <h2 className="text-4xl md:text-5xl font-bold  text-gray-900 mb-6 ">
          Contact Me
          </h2>
        <p className="text-lg md:text-xl mb-6">
          If you would like to discuss potential project ,collabrations or have any
          Question, feel free to reach out to me via any of the following method:
          <ul>
            <li>Email: <a href="mailto:muhammadumar128512@gmail.com"
            className="text-indigo-600 hover:underline transition-colors">
              {" "}
            muhammadumar128512@gmial.com</a></li>
            <li>Linkedin: <a href="https://www.linkedin.com/in/shagufta-zakir-3597552b2"
            className="text-indigo-600 hover:underline transition-colors">
            https://www.linkedin.com/in/shagufta-zakir-3597552b2</a></li>
            <li>Github: <a href="https://github.com/Umar-30" 
            className="text-indigo-600 hover:underline transition-colors">
            https://github.com/Umar-30</a></li>
          </ul>
        </p>
      </div>
    </section>
    <Footer />
   </div>
  );
}
