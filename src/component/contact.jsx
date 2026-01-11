const Contact = () => (
  <section id="contact" className="contact">
    <h2>Get in Touch</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Your Message..." required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
