import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaRedditAlien,
  FaXTwitter,
} from 'react-icons/fa6';

// Put your photo in the /public folder and name it profile.jpg
// (or change this path). If the file is missing, initials are shown instead.
const PROFILE_IMAGE = './profile.webp';

const projects = [
  {
    category: 'Systems Programming',
    title: 'ft_irc — IRC Server',
    description:
      'A C++ server project focused on network programming, TCP communication, socket programming, client connections, and handling multiple clients.',
    tags: ['C++', 'TCP/IP', 'Sockets', 'Linux'],
    status: 'In Progress',
  },
  {
    category: 'DevOps & Infrastructure',
    title: 'Inception',
    description:
      'A containerized infrastructure project using Docker Compose, NGINX, WordPress, and MariaDB, with a focus on networking, persistent storage, and secure configuration.',
    tags: ['Docker', 'Docker Compose', 'NGINX', 'MariaDB'],
    status: 'In Progress',
  },
  {
    category: 'C++ Programming',
    title: 'C++ Modules',
    description:
      'A collection of C++ exercises exploring object-oriented programming, classes, constructors, operators, inheritance, exceptions, and coding practices.',
    tags: ['C++', 'OOP', 'STL', 'Problem Solving'],
    status: 'Coursework',
  },
  {
    category: 'Electronics & Embedded Systems',
    title: 'Electronics and Arduino',
    description:
      'Practical learning and experimentation with Arduino, digital electronics, practical electronics, sensors, and hardware programming.',
    tags: ['Arduino', 'Electronics', 'Digital Systems', 'Embedded'],
    status: 'Practical Experience',
  },
];

const skills = [
  { category: 'Programming', items: ['C', 'C++', 'Object-Oriented Programming', 'Python'] },
  {
    category: 'Systems & Tools',
    items: ['Linux', 'Git', 'TCP/IP', 'Socket Programming', 'Docker', 'Docker Compose'],
  },
  {
    category: 'Electronics',
    items: [
      'Arduino',
      'Digital Electronics',
      'Practical Electronics',
      'Embedded Systems',
      'Automation Fundamentals',
    ],
  },
  {
    category: 'Development',
    items: ['Problem Solving', 'Debugging', 'Teamwork', 'Technical Documentation'],
  },
];

const experience = [
  {
    title: 'Festival Robotique — First Edition',
    organization: 'Faculty of Sciences, Agadir',
    role: 'Activity Coordinator & Photographer',
    description:
      'Contributed to organizing and documenting the first edition of the robotics festival. Gained practical experience in activity coordination, teamwork, communication, and event management.',
  },
  {
    title: 'Applied Physics Studies',
    organization: 'Faculty of Sciences',
    role: 'Academic Background',
    description:
      'Studied applied physics with an interest in electronics, automation, and the physical principles behind technological systems.',
  },
  {
    title: '42 School',
    organization: '42',
    role: 'Software Development Student',
    description:
      'Developing programming skills through practical projects, peer learning, and problem-solving, with a focus on C, C++, Linux, and systems programming.',
  },
];

const education = [
  {
    title: 'Software Development',
    place: '42',
    description:
      'Project-based programming education focused on algorithms, C, C++, Unix systems, and software engineering.',
  },
  {
    title: 'Applied Physics',
    place: 'Faculty of Sciences',
    description:
      'Academic studies connected to physics, electronics, and technological applications.',
  },
];

const specs = [
  ['unit', 'Mohamed Askour'],
  ['class', 'Software + Electronics'],
  ['core', 'C / C++'],
  ['origin', '42 · 1337 Coding School'],
  ['base', 'Faculty of Sciences'],
];

// Replace each YOUR_USERNAME with your real profile name.
const socials = [
  { name: 'GitHub', url: 'https://github.com/m-askour', Icon: FaGithub },
  { name: 'LinkedIn', url: 'https://ma.linkedin.com/in/mohamed-askour-911598235', Icon: FaLinkedinIn },
  { name: 'Instagram', url: 'https://www.instagram.com/moha_partridge/', Icon: FaInstagram },
  { name: 'Facebook', url: 'https://www.facebook.com/mohamed.askour.68622/', Icon: FaFacebookF },
  { name: 'X', url: 'https://x.com/MohamedAskour16', Icon: FaXTwitter },
  { name: 'Reddit', url: 'https://www.reddit.com/u/Superb-Cow5709/s/Y66xRLv5QC', Icon: FaRedditAlien },
];

function SocialLinks({ withLabels = false }) {
  return (
    <ul className={withLabels ? 'social-list labeled' : 'social-list'}>
      {socials.map(({ name, url, Icon }) => (
        <li key={name}>
          <a href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}>
            <Icon aria-hidden="true" />
            {withLabels && <span>{name}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProfilePhoto() {
  const [ok, setOk] = useState(true);

  return (
    <div className="photo-frame">
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />

      {ok ? (
        <img
          src={PROFILE_IMAGE}
          alt="Portrait of Mohamed Askour"
          onError={() => setOk(false)}
        />
      ) : (
        <div className="photo-fallback" aria-label="Profile photo placeholder">
          MA
        </div>
      )}

      <span className="scanline" aria-hidden="true" />
      <span className="photo-tag">
        <i className="led" /> online
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      {/* HEADER */}
      <header className="topbar">
        <a href="#home" className="brand">
          <i className="led" />
          MOHAMED<span> ASKOUR</span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">software development · systems · electronics</p>

            <h1>
              Engineering ideas through code and electronics.
            </h1>

            <p className="lead">
              I am a software development student at 42 with an interest in systems
              programming, software engineering, embedded systems, and electronics. I
              enjoy understanding how things work, solving technical problems, and
              building practical solutions.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                Explore my work
              </a>
              <a className="secondary-btn" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>C / C++</strong>
                <span>Programming</span>
              </div>
              <div>
                <strong>42 · 1337</strong>
                <span>Software education</span>
              </div>
              <div>
                <strong>Faculty of Sciences</strong>
                <span>Electronics & systems</span>
              </div>
            </div>
          </div>

          {/* ROBOT PROFILE CARD */}
          <aside className="hero-card" aria-label="Profile">
            <div className="mini-panel">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="window-title">profile.sys</span>
            </div>

            <ProfilePhoto />

            <dl className="spec-list">
              {specs.map(([key, value]) => (
                <div className="spec-row" key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <SocialLinks />

            <div className="code-window">
              <div className="line">
                <span className="token purple">#include</span>
                <span className="token blue"> &lt;iostream&gt;</span>
              </div>
              <div className="line">
                <span className="token purple">int</span> main(){' {'}
              </div>
              <div className="line indent">
                <span className="token purple">const char*</span> focus =
              </div>
              <div className="line indent">
                <span className="token blue">"Build. Learn. Improve."</span>;
              </div>
              <div className="line indent">
                <span className="token purple">return</span> 0;
              </div>
              <div className="line">{'}'}</div>
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section id="about" className="about section-block">
          <div className="section-heading">
            <p className="eyebrow">// about</p>
            <h2>Curiosity meets engineering.</h2>
          </div>

          <div className="about-grid">
            <p>
              I am a software development student at 42, focused on strengthening my
              skills in C, C++, Linux, and systems programming. Through practical
              projects, I explore low-level concepts, networking, memory management,
              and software architecture.
            </p>
            <p>
              My academic background in applied physics and my interest in electronics
              and automation have shaped my curiosity about how software interacts with
              hardware. I enjoy experimenting, learning new technologies, and turning
              technical ideas into working solutions.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">// experience</p>
            <h2>My learning journey.</h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={item.title}>
                <span className="node" aria-hidden="true" />
                <div className="experience-content">
                  <h3>{item.title}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-organization">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">// education</p>
            <h2>Academic background.</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <h3>{item.title}</h3>
                <span>{item.place}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects section-block">
          <div className="section-heading">
            <p className="eyebrow">// projects</p>
            <h2>Things I build and explore.</h2>
            <p className="section-description">
              A selection of my programming, systems, and electronics work.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="badge">{project.category}</span>
                  <span className="project-status">
                    <i className="led" /> {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills section-block">
          <div className="section-heading">
            <p className="eyebrow">// skills</p>
            <h2>Technologies and knowledge.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERESTS */}
        <section className="section-block interests">
          <div className="section-heading">
            <p className="eyebrow">// interests</p>
            <h2>What drives my curiosity.</h2>
          </div>

          <div className="interests-grid">
            <div className="interest-card">
              <h3>Systems Programming</h3>
              <p>
                Understanding operating systems, memory, processes, networking, and
                low-level programming.
              </p>
            </div>
            <div className="interest-card">
              <h3>Embedded Systems</h3>
              <p>
                Exploring the relationship between software, microcontrollers, sensors,
                and electronic devices.
              </p>
            </div>
            <div className="interest-card">
              <h3>Automation & Electronics</h3>
              <p>
                Learning how electronic systems and automation principles can solve
                practical problems.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <p className="eyebrow">// contact</p>
          <h2>Let's connect and build something meaningful.</h2>
          <p>
            Interested in software development, systems programming, electronics, or
            collaboration? Feel free to get in touch.
          </p>

          <div className="contact-links">
            <a href="mailto:mohaskour.sa@gmail.com">mohaskour.sa@gmail.com</a>
          </div>

          <SocialLinks withLabels />
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mohamed Askour</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
