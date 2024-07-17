import Image from "next/image";

export default function Index() {
  const state = {
    name: "Fisayo Akintomiwa",
    profession: "Software Engineer",
    linkedIn: "https://www.linkedin.com/in/akintomiwa-fisayo-606620193",
    email: "akintomiwa.fisayo@gmail.com",
    phoneNumber: ["+2349067677842", "+2349063999113"],
    github: "https://github.com/akintomiwa-fisayo",
    about: `Solution-driven software engineer over 6 years experience excelling in highly collaborative work environment, finding solutions to
    challenges while being focused on scalability, security, reponsiveness and client's satisfaction.`,
    skills: [
      {
        title: "HTML5",
        rate: 5,
      },
      {
        title: "Database (PostgreSQL, MySQL, MariaDB, MongoDB)",
        rate: 5,
      },
      {
        title: "JavaScript",
        rate: 5,
      },

      {
        title: "Node.js with express",
        rate: 5,
      },
      {
        title: "CSS (SCSS, LESS)",
        rate: 5,
      },
      {
        title: "Sequelize",
        rate: 5,
      },
      {
        title: "Next.js",
        rate: 5,
      },
      {
        title: "AWS",
        rate: 5,
      },
      {
        title: "TypeScript",
        rate: 5,
      },
      {
        title: "Elasticsearch, Opensearch",
        rate: 5,
      },
      {
        title: "Go",
        rate: 5,
      },
      {
        title: "Figma",
        rate: 5,
      },
    ],
    softSkills: [
      "Good communication skills.",
      "Ability to learn and adapt quickly.",
      "Ability to work with distributed teams.",
    ],
    works: [
      {
        position: "Senior Software Engineer",
        organization: "Prunedge",
        location: "Lagos, Nigeria",
        from: "Oct 2023",
        to: "Present",
        contributions: [
          "Led the development of the admin panel for a platform that offers a fast and reliable payment experience for merchants and customers using Tap & Pay cards and terminals. Successfully delivered both version 1 and version 2 on time while meeting critical release deadlines.",
          "Revamped the codebase by introducing shared components and enforcing the use of TypeScript accross the codebase. This made the system more stable and easier to maintain, and it also helped reduce code complexity and cut down on bugs.",
          "Mentored junior engineers, providing guidance on best practices, code reviews, and career development.",
        ],
      },
      {
        position: "Senior Software Engineer",
        organization: "Abule",
        location: "New York, USA",
        from: "Jun 2020",
        to: "Oct 2023",
        contributions: [
          "Led the development of a web app that aim to disrupt the child care industry in the U.S. by allowing users the manage our their children activities and care needs from Sitting to Tutoring, Homework help and Carpooling.",
          "I supported the team with code reviews and debugging, offering feedback and guidance on best practices.",
          "Collaborated closely with UX designers to build intuitive and responsive UI with a focus on accessibility.",
        ],
      },
      {
        position: "Fullstack Developer (Independent)",
        organization: "Freelancer",
        location: "Lagos, Nigeria",
        from: "July 2017",
        to: "Oct 2019",
        contributions: [
          "Created websites tailored to the needs of businesses and individuals based on their specific needs, and worked as a contractor for companies on various projects whenever they needed additional support",
        ],
      },
    ],
    certificates: [
      {
        date: "oct 2019",
        title: "Retrieve data using SQL",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Test Website Interface",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Implement a Relational Databse with SQL",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Create a simple prototype with wireframe",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Secure Web Application With OWASP",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Manage your code project with Git & Github",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Learn command line in terminal",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Create web page layout with CSS",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Build your first web pages with HTML and CSS",
        author: "opencalssrooms",
      },
      {
        date: "oct 2019",
        title: "Write javscript for web",
        author: "opencalssrooms",
      },
      {
        date: "sep 2019",
        title: "Build web apps with ReactJS",
        author: "opencalssrooms",
      },
      {
        date: "sep 2019",
        title: "Build Web Projects With REST APIs",
        author: "opencalssrooms",
      },
      {
        date: "sep 2019",
        title: "Agile Project Management",
        author: "opencalssrooms",
      },
      {
        date: "sep 2019",
        title: "Learn to code with javascript",
        author: "opencalssrooms",
      },
      {
        date: "aug 2019",
        title: "Full-Stack Web Application With Node.js, Express, and MongoDB",
        author: "opencalssrooms",
      },
      {
        date: "aug 2019",
        title: "Learn how to learn",
        author: "opencalssrooms",
      },
    ],
    languages: ["English", "Yoruba"],
    projects: [
      {
        name: "Victrola Stream",
        link: "https://stream.victrola.com",
      },
      {
        name: "Luckycharm Traps",
        link: "https://www.luckycharmstraps.com",
      },
      {
        name: "Let's Get Set",
        link: "https://app.letsgetset.co",
      },
      {
        name: "Moms Hierarchy Of Needs Timechek",
        link: "https://timecheck.momshierarchyofneeds.com",
      },
      {
        name: "Director Tolulope Ajayi",
        link: "https://tolulopeajayi.com",
      },
      {
        name: "Deborah Williams",
        link: "https://adebworldwide.com",
      },
      {
        name: "Koddfarms Products LTD",
        link: "https://koddfarms.com",
      },
    ],
  };
  const { skills, works, certificates, softSkills, languages } = state;

  const skillsJSX: JSX.Element[] = [];
  skills.forEach((skill) => {
    let rateText = "no experience";
    if (skill.rate === 1) {
      rateText = "poor";
    } else if (skill.rate === 2) {
      rateText = "alright";
    } else if (skill.rate === 3) {
      rateText = "good";
    } else if (skill.rate === 4) {
      rateText = "very good";
    } else if (skill.rate === 5) {
      rateText = "excellent";
    }
    const rates = [];
    for (let i = 1; i <= 5; i += 1) {
      rates.push(
        <span className={`icon${i > skill.rate ? " no-fill" : ""}`} />
      );
    }

    skillsJSX.push(
      <div className="skill detail">
        <div>
          <span className="icon" />
        </div>
        <div>
          <span className="title">{skill.title}</span>
          {/* <div className="rate">
            <div className="rate-icons">
              {rates}
            </div>
            <span className="rate-text">{rateText}</span>
          </div> */}
        </div>
      </div>
    );
  });

  const softSkillsJSX: JSX.Element[] = [];
  softSkills.forEach((skill) => {
    softSkillsJSX.push(<li className="skill detail">{skill}</li>);
  });

  const languagesJSX: JSX.Element[] = [];
  languages.forEach((skill) => {
    languagesJSX.push(
      <div className="skill detail">
        <div>
          <span className="icon" />
        </div>
        <div>
          <span className="title">{skill}</span>
        </div>
      </div>
    );
  });

  const worksJSX: JSX.Element[] = [];
  works.forEach((work) => {
    worksJSX.push(
      <div className="">
        <div className="font-medium">{work.position}</div>
        <div className="font-medium">
          {work.organization}, {work.location}
        </div>
        <div className="italic">
          {`${work.from} - `}
          {work.to}
        </div>
        <ul className="mt-2 mb-0">
          {work.contributions.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>
      </div>
    );
  });

  const certificatesJSX: JSX.Element[] = [];
  certificates.forEach((certificate) => {
    certificatesJSX.push(
      <div className="certificate detail">
        <div>
          <span className="icon" />
        </div>
        <div>
          <div className="date">
            <div>{`${certificate.date}`}</div>
          </div>
          <div className="infos">
            <div>{`${certificate.title} : ${certificate.author}`}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <header className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-2">{state.name}</h1>
        <div id="bullets">
          <p className="bullet">
            <span className="font-semibold">E-mail: </span>
            <span>
              <a href={`mailto:${state.email}`}>{state.email}</a>
            </span>
          </p>
          <p className="bullet">
            <span className="font-semibold">Phone No: </span>
            {state.phoneNumber.map((phone, i) => (
              <span key={i}>
                <a href={`tel:${phone}`}>{phone}</a>
                {i === state.phoneNumber.length - 1 ? "" : " , "}
              </span>
            ))}
          </p>
          <p className="bullet">
            <span className="font-semibold">LinkedIn: </span>
            <span>
              <a href={state.linkedIn}>{state.linkedIn}</a>
            </span>
          </p>
          <p className="bullet">
            <span className="font-semibold">GitHub: </span>
            <span>
              <a href={state.github}>{state.github}</a>
            </span>
          </p>
        </div>
      </header>
      <main>
        <Section title="Professional Summary">{state.about}</Section>

        <Section title="Work Experience">
          <div className="grid gap-5">{worksJSX}</div>
        </Section>

        <Section title="Technical Skills">
          <ul>
            <li>
              <span className="font-medium">Languages</span>:
              JavaScript,TypeScript
            </li>
            <li>
              <span className="font-medium">Frameworks</span>: React, Next.js,
              JQuery, Bootstrap, Tailwind, Node.js, Express
            </li>
            <li>
              <span className="font-medium">Databases</span>: MongoDB,
              PostgreSQL, MySQL
            </li>
            <li>
              <span className="font-medium">Tools</span>: Git, JIRA, Click-up,
              Heroku, AWS, VS Code, Codeium
            </li>
            <li>
              <span className="font-medium">Testing</span>: Jest, Mocha, Chai
            </li>
            <li>
              <span className="font-medium">Methodologies</span>: Agile, Scrum,
              Kanban
            </li>
          </ul>
        </Section>

        <Section title="Soft Skills">
          <ul>{softSkillsJSX}</ul>
        </Section>

        <Section title="Featured Projects">
          <ul>
            {state.projects.map((project, i) => (
              <li key={i} className="mb-2 last:mb-0">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name} - {project.link}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="References">Available upon request.</Section>
      </main>
    </>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mb-5">
      <h2 className="w-full border-b-[1px] border-black text-xl font-medium mb-3">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};
