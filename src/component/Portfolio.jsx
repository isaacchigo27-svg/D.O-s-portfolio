const projects = [
  {
    title: "Creative Agency Website",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Modern Landing Page",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "SaaS Dashboard UI",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <h2>Featured Projects</h2>

    <div className="grid">
      {projects.map((p, i) => (
        <div key={i} className="project">
          <img src={p.img} alt={p.title} />
          <h4>{p.title}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
