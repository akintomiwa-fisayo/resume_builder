import React from 'react';
import '../less/styles.less';

const ucFirst = (value) => {
  if (isNaN(value)) {
    let newValue = '';
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        newValue = value[0].toUpperCase();
      } else {
        newValue += value[i];
      }
    }
    return newValue;
  }
  return value;
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'akintomiwa fisayo',
      profession: 'fullstack web developer',
      linkedIn: 'https://linkedin.com/in/akintomiwa-fisayo606620193/',
      email: 'akintomiwa.fisayo@gmail.com',
      phoneNumber: ['+2349067677842', '+2349063999113'],
      about: `Solution-driven software engineer with 6 years experience excelling in highly collaborative work environment, finding solutions to
      challenges while being focused on scalability, security, reponsiveness and client's satisfaction.`,
      skills: [
        {
          title: 'HTML5',
          rate: 5,
        },
        {
          title: 'Database (PostgreSQL, MySQL, MariaDB, MongoDB)',
          rate: 5,
        },
        {
          title: 'JavaScript',
          rate: 5,
        },

        {
          title: 'Node.js with express',
          rate: 5,
        },
        {
          title: 'CSS (SCSS, LESS)',
          rate: 5,
        },
        {
          title: 'Sequelize',
          rate: 5,
        },
        {
          title: 'Next.js',
          rate: 5,
        },
        {
          title: 'AWS',
          rate: 5,
        },
        {
          title: 'TypeScript',
          rate: 5,
        },
        {
          title: 'Elasticsearch, Opensearch',
          rate: 5,
        },
        {
          title: 'Go',
          rate: 5,
        },
        {
          title: 'Figma',
          rate: 5,
        },
      ],
      softSkills: [
        'Good communication skills.',
        'Ability to learn and adapt quickly.',
        'Ability to work with distributed teams.',
      ],
      works: [
        {
          position: 'fullstack developer',
          from: 'Jun 2020',
          to: 'present',
          company: [{
            name: 'Abule',
            description: 'I help set up App environments, introduced and set up company\'s monorepo,  design database structure, code on both frontend and backend and help the team through code review and code debugging.',
            city: '',
            state: '',
          }],
          projects: <>
            <i className="company">Victrola Stream <a href="https://stream.victrola.com">(https://stream.victrola.com)</a></i>
            <span>A single web page to showcase victrola's products in partnership with Sonos.</span>
            <i className="company">Luckycharm Traps <a href="https://www.luckycharmstraps.com">(https://www.luckycharmstraps.com)</a></i>
            <span>A website for luckycharm's traps champaign.</span>
            <i className="company">Let's Get Set  <a href="https://app.letsgetset.co">(https://app.letsgetset.co)</a></i>
            <span>A platform that helps users with Tax Refund.</span>
            <i className="company">Timechek  <a href="https://timecheck.momshierarchyofneeds.com">(https://timecheck.momshierarchyofneeds.com)</a></i>
            <span>A platform that help mothers keep track of how they spend their time and how to improve in different aspects  of their lives.</span>
          </>,
          techStack: 'Node.js, Sequelize, Elasticsearch, PostgreSQl, AWS Amplify, AWS S3, AWS Chime, Transloadit, Next.js, LESS, SCSS',
          tools: 'Github, Heroku,  AWS',

        },
        {
          position: 'fullstack developer (Independent)',
          description: 'Built websites for bussinesses and people according to their requirements and helped companies complete a couple of projects whenever they needed an extra hand.',
          from: 'July 2017',
          to: 'Oct 2019',
          company: [
            {
              name: 'Director Tolulope Ajayi',
              link: 'https://tolulopeajayi.com',
              description: 'Built a professional portfolio to showcase works (past and present) and news about director Tolulope Ajayi (https://tolulopeajayi.com).',
              city: '',
              state: '',
            },
            {
              name: 'Deborah Williams',
              link: 'https://adebworldwide.com',
              description: 'Built a simple portfolio (https://adebworldwide.com).',
              city: '',
              state: '',
            },
            {
              name: 'Koddfarms Products LTD',
              link: 'https://koddfarms.com',
              description: 'Built the farm\'s official website to showcase it\'s products and agricultural believes (https://koddfarms.com).',
              city: '',
              state: '',
            },
            {
              name: 'DevCTrainingWithAndela Capstone Project',
              description: 'Built a web application for a company that allows its employees to share gif and video posts, comment on posts, report posts and comments and also allows admin users to create a new employee and attend to reports submitted by employees (https://akintomiwa-fisayo.github.io/).',
              link: 'https://akintomiwa-fisayo.github.io',
              city: '',
              state: '',
            },
          ],
          techStack: 'Node.js, Sequelize, MySQL, MariaDB, PostgreSQL, MongoDB, React, Next.js, SCSS, LESS, HTML5, Javascript, Jquery',
          tools: 'Github, Heroku',
        },
      ],
      certificates: [
        {
          date: 'oct 2019',
          title: 'Retrieve data using SQL',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Test Website Interface',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Implement a Relational Databse with SQL',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Create a simple prototype with wireframe',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Secure Web Application With OWASP',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Manage your code project with Git & Github',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Learn command line in terminal',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Create web page layout with CSS',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Build your first web pages with HTML and CSS',
          author: 'opencalssrooms',
        },
        {
          date: 'oct 2019',
          title: 'Write javscript for web',
          author: 'opencalssrooms',
        },
        {
          date: 'sep 2019',
          title: 'Build web apps with ReactJS',
          author: 'opencalssrooms',
        },
        {
          date: 'sep 2019',
          title: 'Build Web Projects With REST APIs',
          author: 'opencalssrooms',
        },
        {
          date: 'sep 2019',
          title: 'Agile Project Management',
          author: 'opencalssrooms',
        },
        {
          date: 'sep 2019',
          title: 'Learn to code with javascript',
          author: 'opencalssrooms',
        },
        {
          date: 'aug 2019',
          title: 'Full-Stack Web Application With Node.js, Express, and MongoDB',
          author: 'opencalssrooms',
        },
        {
          date: 'aug 2019',
          title: 'Learn how to learn',
          author: 'opencalssrooms',
        },
      ],
      languages: [
        'English',
        'Yoruba',
      ],
    };
  }

  render() {
    const { state } = this;
    const {
      skills, works, certificates, softSkills, languages,
    } = state;

    const skillsJSX = [];
    skills.forEach((skill) => {
      let rateText = 'no experience';
      if (skill.rate === 1) {
        rateText = 'poor';
      } else if (skill.rate === 2) {
        rateText = 'alright';
      } else if (skill.rate === 3) {
        rateText = 'good';
      } else if (skill.rate === 4) {
        rateText = 'very good';
      } else if (skill.rate === 5) {
        rateText = 'excellent';
      }
      const rates = [];
      for (let i = 1; i <= 5; i += 1) {
        rates.push(
          <span className={`icon${i > skill.rate ? ' no-fill' : ''}`} />,
        );
      }

      skillsJSX.push(
        <div className="skill detail">
          <div>
            <span className="icon" />
          </div>
          <div>
            <span className="title">{ucFirst(skill.title)}</span>
            {/* <div className="rate">
              <div className="rate-icons">
                {rates}
              </div>
              <span className="rate-text">{rateText}</span>
            </div> */}
          </div>
        </div>,
      );
    });

    const softSkillsJSX = [];
    softSkills.forEach((skill) => {
      softSkillsJSX.push(
        <div className="skill detail">
          <div>
            <span className="icon" />
          </div>
          <div>
            <span className="title">{ucFirst(skill)}</span>
          </div>
        </div>,
      );
    });

    const languagesJSX = [];
    languages.forEach((skill) => {
      languagesJSX.push(
        <div className="skill detail">
          <div>
            <span className="icon" />
          </div>
          <div>
            <span className="title">{ucFirst(skill)}</span>
          </div>
        </div>,
      );
    });

    const worksJSX = [];
    works.forEach((work) => {
      const { company } = work;
      worksJSX.push(
        <div className="work detail">
          <div>
            <span className="icon" />
          </div>
          <div>
            <div className="date">
              <div>{`${ucFirst(work.from)}-`}</div>
              <div>{ucFirst(work.to)}</div>
            </div>
            <div className="infos">
              <div className="position">{ucFirst(work.position)}</div>
              <div>
                {company.map((comp) => (
                  <div>
                    <i className="company">{ucFirst(comp.name)} {comp.link ? <a href={comp.link}>({comp.link})</a> : ''}</i>
                    <span>{comp.description}</span>
                  </div>
                ))}
              </div>
              {/* <span>{ucFirst(work.description)}</span> */}
              {work.projects && (
                <>
                  <p><b>Projects:</b></p>
                  <div className="projects">
                    {work.projects}
                  </div>
                </>
              )}
              <p><b>Tech stack:</b> {work.techStack}</p>
              <p><b>Tools:</b> {work.tools}</p>
            </div>
          </div>
        </div>
        ,
      );
    });

    const certificatesJSX = [];
    certificates.forEach((certificate) => {
      certificatesJSX.push(
        <div className="certificate detail">
          <div>
            <span className="icon" />
          </div>
          <div>
            <div className="date">
              <div>{`${ucFirst(certificate.date)}`}</div>
            </div>
            <div className="infos">
              <div>{`${ucFirst(certificate.title)} : ${ucFirst(certificate.author)}`}</div>
            </div>
          </div>
        </div>
        ,
      );
    });

    return (
      <div id="App">
        <header>
          <h1 id="author">{state.name}</h1>
          <h2 id="profession">{state.profession}</h2>
          <div id="bullets">
            <p className="bullet">
              <span>E-mail</span>
              <span><a href={`mailto:${state.email}`} style={{ color: 'white' }}>{ucFirst(state.email)}</a></span>
            </p>
            <p className="bullet">
              <span>Phone No</span>
              {state.phoneNumber.map((phone, i) => <span><a href={`tel:${phone}`} style={{ color: 'white' }}>{ucFirst(phone)}</a>{i === state.phoneNumber.length - 1 ? '' : ' , '}</span>)}
            </p>
            <p className="bullet">
              <span>LinkedIn</span>
              <span><a href={state.linkedIn} style={{ color: 'white' }}>{ucFirst(state.name)}</a></span>
            </p>
          </div>
        </header>
        <div id="main">
          <div id="aboutAuthor">{state.about} </div>

          <div className="detail-group">
            <div className="detail-header">
              <span>Skills</span>
            </div>
            <div className="details">
              {skillsJSX}
            </div>
          </div>

          <div className="double-detail-group">
            <div className="detail-group">
              <div className="detail-header">
                <span>Soft Skills</span>
              </div>
              {softSkillsJSX}
            </div>
            <div className="detail-group">
              <div className="detail-header">
                <span>Languages</span>
              </div>
              {languagesJSX}
            </div>
          </div>

          <div className="detail-group">
            <div className="detail-header">
              <span>Work History</span>
            </div>
            {worksJSX}
          </div>

          <div className="detail-group">
            <div className="detail-header">
              <span>Certifications</span>
            </div>
            {certificatesJSX}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
