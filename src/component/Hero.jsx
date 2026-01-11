import heroImg from "../assets/IMG-20260109-WA0030.jpg";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-container">
      
      {/* Text content */}
      <div className="hero-text">
        <h1>Hi, I’m Divine</h1>
        <p>Web Designer & Frontend Developer</p>
        <a href="#portfolio" className="btn">See My Work</a>
      </div>


<div className="hero-image">
  <img src={heroImg} alt="Divine portfolio" />
</div>


    </div>
  </section>
);

export default Hero;
