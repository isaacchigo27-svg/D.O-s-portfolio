import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import About from "./component/About"
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/contact";
import Footer from "./component/Footer";
import "./styles/style.css"


const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

export default App;
