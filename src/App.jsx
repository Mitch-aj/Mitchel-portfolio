import { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Code2, Terminal, Server, BrainCircuit, Send, CheckCircle2
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Go REST API",
    type: "BACKEND DEVELOPMENT",
    description: "A backend API built with Go, focused on clean handlers, database access, structured errors and maintainable project organisation.",
    stack: ["Go", "PostgreSQL", "REST API"],
    link: "https://github.com/Mitch-aj/Go-API-project.git",
    
  },
  // {
  //   number: "02",
  //   name: "Developer Workspace",
  //   type: "FULL-STACK DEVELOPMENT",
  //   description: "A space for showcasing practical software experiments, documenting technical decisions and connecting frontend interfaces to backend services.",
  //   stack: ["React", "JavaScript", "Go"],
  //   link: "https://github.com/",
  //   note: "Replace with your repository"
  // },
  // {
  //   number: "03",
  //   name: "Machine Learning Lab",
  //   type: "EXPLORATION",
  //   description: "An evolving collection of Python experiments exploring data preparation, machine learning fundamentals and model building.",
  //   stack: ["Python", "scikit-learn", "Jupyter"],
  //   link: "https://github.com/",
  //   note: "Replace with your repository"
  // }
];

const skills = [
  { icon: Terminal, title: "Languages", items: "Go · Python · Java · JavaScript" },
  { icon: Server, title: "Backend", items: "REST APIs · PostgreSQL · SQL · HTTP" },
  { icon: Code2, title: "Frontend", items: "HTML · CSS " },
  { icon: BrainCircuit, title: "Currently exploring", items: "Machine Learning · PyTorch · DevOps · React · Vite   " }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const closeMenu = () => setMenuOpen(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submitContact(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Message could not be sent.");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <>
      <div className="site-shell">
        <header className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M.</span><span>MITCHEL<span className="brand-muted">/DEV</span></span></a>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <main>
          <section className="hero section" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
              <h1>Building thoughtful<br />software for the<br /><span className="accent">real world.</span></h1>
              <p className="hero-description">I'm Mitchel, a software engineer interested in building reliable backend systems, useful products and intelligent applications.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Get in touch <Mail size={16} /></a>
              </div>
              <div className="hero-location"><MapPin size={15} /> Abuja, Nigeria <span className="location-divider">/</span> Open to remote opportunities</div>
            </div>
            <div className="hero-visual" aria-label="Decorative code illustration">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="visual-core"><span className="core-bracket">{"{"}</span><span className="core-m">M</span><span className="core-bracket">{"}"}</span></div>
              <div className="floating-code code-top"><span>01</span> func build() {"{"}</div>
              <div className="floating-code code-bottom"><span>02</span> return ideas + code</div>
              <div className="visual-caption">CURIOSITY → CODE → IMPACT</div>
              <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
            </div>
            <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="index-line" /><span>01 / 04</span></div>
          </section>

          <section className="section about-section" id="about">
            <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
            <div className="about-grid">
              <h2>Curious by nature.<br /><span className="muted-heading">Engineer by practice.</span></h2>
              <div className="about-text">
                <p>I'm a software engineering graduate from Nigeria, focused on growing into a well-rounded engineer through consistent learning and hands-on building.</p>
                <p>My current focus is backend development with <strong>Go</strong> and programming with <strong>Python</strong>. I enjoy understanding how systems fit together, from the API layer to the data behind it.</p>
                <p>I'm also exploring machine learning and modern frontend development, with the long-term goal of building software that is both useful and thoughtfully engineered.</p>
                <a className="text-link" href="#contact">A project in mind? Let's talk <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </section>

          <section className="section work-section" id="work">
            <div className="section-kicker">02 / SELECTED WORK</div>
            <div className="section-heading-row"><h2>Things I've been<br /><span className="muted-heading">building & exploring.</span></h2><p>A few areas of work and learning.</p></div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ArrowUpRight /></a>
                  <span className="project-note">{project.note}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section skills-section" id="skills">
            <div className="section-kicker">03 / MY TOOLKIT</div>
            <div className="section-heading-row"><h2>Tools of the<br /><span className="muted-heading">trade.</span></h2><p>I believe in strong fundamentals, learning by building and choosing the right tool for the problem.</p></div>
            <div className="skills-grid">
              {skills.map(({ icon: Icon, title, items }) => <div className="skill-card" key={title}><div className="skill-icon"><Icon size={21} /></div><h3>{title}</h3><p>{items}</p></div>)}
            </div>
          </section>

          <section className="section contact-section" id="contact">
            <div className="section-kicker">04 / YOUR TURN</div>
            <div className="contact-grid">
              <div><h2>Have a good<br />one in <span className="accent">mind?</span></h2><p className="contact-intro">I'm open to interesting projects, collaborations and opportunities to grow with a great team.</p><a className="email-link" href="mailto:hello@yourdomain.com">ajumosinbiamitchel@gmail.com <ArrowUpRight size={17} /></a><div className="social-links"><a href="https://github.com/Mitch-aj" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/mitchel-ajumosinbia-06346735b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
              <form className="contact-form" onSubmit={submitContact}>
                <label>Your name<input name="name" value={form.name} onChange={update} placeholder="What should I call you?" required /></label>
                <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
                <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." rows="4" required /></label>
                <button className="button button-primary submit-button" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"} <Send size={16} /></button>
                {status === "sent" && <p className="form-feedback success"><CheckCircle2 size={16} /> Message sent. Thanks for reaching out!</p>}
                {status === "error" && <p className="form-feedback error">Couldn't send your message. Please email me directly.</p>}
              </form>
            </div>
          </section>
        </main>

        <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M.</span><span>MITCHEL<span className="brand-muted">/DEV</span></span></a><span>Designed & built with intention.</span><span>© {new Date().getFullYear()} Mitchel Ajumosinbia</span></footer>
      </div>
    </>
  );
}

export default App;