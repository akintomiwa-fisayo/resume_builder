export default function Index() {
  const data = {
    name: "Fisayo Akintomiwa",
    title: "Senior Software Engineer",
    email: "akintomiwa.fisayo@gmail.com",
    phoneNumbers: ["+2349067677842", "+2349063999113"],
    linkedIn: "https://www.linkedin.com/in/akintomiwa-fisayo-606620193",
    github: "https://github.com/akintomiwa-fisayo",
    summary: `Results-oriented Senior Software Engineer with 8+ years of experience building scalable, 
    production-grade web applications across fintech, childcare, and developer tooling sectors. 
    Proven track record of leading end-to-end product development—from architecture design to deployment—while 
    mentoring engineering teams and enforcing quality through TypeScript, code reviews, and shared component systems. 
    Passionate about clean architecture, performance, and delivering exceptional user experiences.`,

    skills: {
      languages: ["JavaScript", "TypeScript", "Go", "HTML5", "CSS / SCSS"],
      frameworks: ["React", "Next.js", "Node.js", "Express.js", "NestJS"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "OpenSearch"],
      tools: [
        "Git", "AWS", "Docker", "Prisma", "Sequelize",
        "Chrome Extensions (MV3)", "Figma", "JIRA", "ClickUp", "Swagger / OpenAPI",
      ],
      testing: ["Jest", "Mocha", "Chai"],
      methodologies: ["Agile", "Scrum", "Kanban", "CI/CD"],
    },

    softSkills: [
      "Strong technical communication & documentation",
      "Effective in distributed & remote teams",
      "Quick learner with high adaptability",
      "Mentorship & code review leadership",
      "Problem-solving under tight deadlines",
    ],

    works: [
      {
        position: "Senior Software Engineer",
        org: "Prunedge",
        location: "Lagos, Nigeria",
        period: "Oct 2023 – Present",
        contributions: [
          "Led frontend development of a Tap & Pay fintech admin panel (v1 & v2), delivering both releases on time with zero critical post-launch defects.",
          "Revamped legacy codebase by introducing a shared component library and enforcing TypeScript across all modules—cutting bug reports by ~40% and reducing onboarding time for new engineers.",
          "Established code review standards and coding guidelines adopted team-wide; mentored 3 junior engineers on best practices, architecture patterns, and career growth.",
          "Collaborated with product managers and designers to translate complex requirements into clean, performant UIs.",
        ],
      },
      {
        position: "Full-Stack Engineer",
        org: "Matcheros · Job Board Platform (Client Project)",
        location: "Delaware, USA (Remote)",
        period: "Dec 2025 – May 2026",
        contributions: [
          "Architected and built a full-stack developer job board platform end-to-end, featuring dual portals for job seekers and hiring companies.",
          "Developed the frontend with React (Vite), TypeScript, and Tailwind CSS; implemented advanced job filtering, AI-powered job matching dashboard, company profiles, dark mode, and applicant tracking views.",
          "Engineered the REST API backend with NestJS, PostgreSQL, and Prisma ORM; integrated Google OAuth and LinkedIn OAuth via Passport.js for frictionless authentication.",
          "Implemented CV/résumé PDF parsing to auto-populate applicant profiles, salary-based job sorting, and real-time application status workflows (reviewing → shortlisted → interview → offer).",
          "Used openapi-sync (own NPM package) to keep frontend TypeScript types automatically in sync with the NestJS/Swagger backend schema.",
        ],
        tags: ["NestJS", "React", "Vite", "TypeScript", "PostgreSQL", "Prisma", "Passport.js"],
      },
      {
        position: "Senior Software Engineer",
        org: "Abule",
        location: "New York, USA (Remote)",
        period: "Jun 2020 – Oct 2023",
        contributions: [
          "Led development of a full-featured childcare platform serving U.S. users, covering sitting, tutoring, homework help, and carpooling—shipped on a tight market-entry deadline.",
          "Architected and implemented a responsive, accessible frontend with React, working closely with UX designers to achieve pixel-perfect fidelity across devices.",
          "Drove code quality through regular code reviews and debugging sessions; served as primary technical reference for junior and mid-level engineers.",
          "Integrated third-party APIs (payments, scheduling, notifications), ensuring reliability and graceful error handling.",
        ],
      },
      {
        position: "Fullstack Developer",
        org: "Freelancer / Independent Contractor",
        location: "Lagos, Nigeria",
        period: "Jul 2017 – Oct 2019",
        contributions: [
          "Delivered 7+ custom web applications for businesses and individuals, spanning e-commerce, streaming, portfolio, and service-booking domains.",
          "Worked as a contractor for multiple companies providing surge engineering capacity on Node.js and React projects.",
          "Built end-to-end solutions independently—from requirements gathering and UI design to database design and deployment.",
        ],
      },
    ],

    personalProjects: [
      {
        position: "Creator & Developer",
        org: "Tab Manager Pro · Chrome Web Store",
        location: "Chrome Extension (Manifest V3)",
        period: "2024 – Present",
        contributions: [
          "Engineered a privacy-first, high-performance browser extension (Manifest V3) for tab hygiene, workspace session management, and developer productivity.",
          "Architected full workspace snapshot & session state preservation engine restoring window geometry, tab group hierarchies, and origin-scoped cookies, localStorage, sessionStorage, and IndexedDB.",
          "Implemented automated background memory hibernation via chrome.alarms and chrome.tabs.discard, duplicate tab detection/merging, and stale tab cleanup (>24h).",
          "Built surgical origin-level storage/cache purge tools (CacheStorage, Service Workers, Cookies) and global keyboard shortcuts to streamline web developer debugging.",
          "Created an offscreen document-powered clipboard stack manager and Command Palette (Cmd+K) with keyboard quick-pick and direct webpage text injection.",
        ],
        tags: ["Chrome Extension (MV3)", "JavaScript (ES6+)", "Offscreen API", "Service Workers", "HTML5 / CSS3"],
      },
      {
        position: "Open-Source Developer",
        org: "Personal / NPM & Open VSX Tools",
        location: "",
        period: "2023 – Present",
        contributions: [
          "openapi-sync (NPM): CLI tool that auto-generates typed endpoint URIs and TypeScript definitions from OpenAPI schemas, keeping API integrations always in sync.",
          "route-sage (NPM): Lightweight TypeScript utility for type-safe application route management, eliminating routing bugs at compile time.",
          "Icon-Classes (VS Code Extension): Developer productivity tool providing icons/image preview on hover, class intelliSense, and syntax highlighting.",
          "Zen-Games (VS Code Extension): A VS Code extension that lets developers play relaxing mini-games without leaving their editor — a productivity-friendly way to take mental breaks.",
        ],
        tags: ["TypeScript", "Node.js", "CLI", "VS Code Extension API", "OpenAPI / Swagger"],
      },
    ],

    featuredProjects: [
      { name: "Tab Manager Pro (Chrome Extension)", url: "https://chromewebstore.google.com/detail/tab-manager-pro/nikfajonlnmifdbjmdoglbeddggajgaf" },
      { name: "Openapi-Sync (NPM)", url: "https://www.npmjs.com/package/openapi-sync" },
      { name: "Route-Sage (NPM)", url: "https://www.npmjs.com/package/route-sage" },
      { name: "Icon-Classes (VS Code Extension)", url: "https://open-vsx.org/extension/akintomiwa-fisayo/icon-classes" },
      { name: "Zen-games (VS Code Extension)", url: "https://open-vsx.org/extension/akintomiwa-fisayo/zen-games" },
      { name: "Matcheros Job Board", url: "https://jobboard.matcheros.com" },
      { name: "Luckycharm Traps", url: "https://www.luckycharmstraps.com" },
      { name: "Director Tolulope Ajayi", url: "https://tolulopeajayi.com" },
      { name: "Moms Hierarchy Of Needs Timechek", url: "https://timecheck.momshierarchyofneeds.com" },
      { name: "Let's Get Set", url: "https://app.letsgetset.co" },
      { name: "Victrola Stream", url: "https://stream.victrola.com" },
    ],

    languages: ["English (Fluent)", "Yoruba (Native)"],

    certifications: [
      { date: "Oct 2019", title: "Retrieve Data Using SQL", author: "OpenClassrooms" },
      { date: "Oct 2019", title: "Implement a Relational Database with SQL", author: "OpenClassrooms" },
      { date: "Oct 2019", title: "Secure Web Application With OWASP", author: "OpenClassrooms" },
      { date: "Oct 2019", title: "Test Website Interface", author: "OpenClassrooms" },
      { date: "Oct 2019", title: "Manage Code Projects with Git & Github", author: "OpenClassrooms" },
      { date: "Sep 2019", title: "Build Web Apps with ReactJS", author: "OpenClassrooms" },
      { date: "Sep 2019", title: "Build Web Projects with REST APIs", author: "OpenClassrooms" },
      { date: "Sep 2019", title: "Agile Project Management", author: "OpenClassrooms" },
      { date: "Aug 2019", title: "Full-Stack Web App with Node.js, Express & MongoDB", author: "OpenClassrooms" },
    ],
  };

  return (
    <div className="resume-page">
      <div className="resume-wrapper">
        {/* ── Header ── */}
        <header className="resume-header">
          <h1 className="header-name">{data.name}</h1>
          <p className="header-title">{data.title}</p>
          <div className="header-contacts">
            <span className="header-contact-item">
              ✉{" "}
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </span>
            {data.phoneNumbers.map((p, i) => (
              <span key={i} className="header-contact-item">
                📞 <a href={`tel:${p}`}>{p}</a>
              </span>
            ))}
            <span className="header-contact-item">
              🔗{" "}
              <a href={data.linkedIn} target="_blank" rel="noreferrer">
                linkedin.com/in/akintomiwa-fisayo
              </a>
            </span>
            <span className="header-contact-item">
              🐙{" "}
              <a href={data.github} target="_blank" rel="noreferrer">
                github.com/akintomiwa-fisayo
              </a>
            </span>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="resume-body">
          {/* ── Sidebar ── */}
          <aside className="resume-sidebar">
            {/* Technical Skills */}
            <div className="sidebar-section">
              <h2 className="sidebar-section-title">Technical Skills</h2>

              <div className="skill-category">
                <div className="skill-category-label">Languages</div>
                <div className="skills-grid">
                  {data.skills.languages.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-label">Frameworks & Runtimes</div>
                <div className="skills-grid">
                  {data.skills.frameworks.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-label">Databases & Search</div>
                <div className="skills-grid">
                  {data.skills.databases.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-label">Tools & Platforms</div>
                <div className="skills-grid">
                  {data.skills.tools.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-label">Testing</div>
                <div className="skills-grid">
                  {data.skills.testing.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-label">Methodologies</div>
                <div className="skills-grid">
                  {data.skills.methodologies.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="sidebar-section">
              <h2 className="sidebar-section-title">Soft Skills</h2>
              {data.softSkills.map((s) => (
                <div key={s} className="lang-item">{s}</div>
              ))}
            </div>

            {/* Languages */}
            <div className="sidebar-section">
              <h2 className="sidebar-section-title">Languages</h2>
              {data.languages.map((l) => (
                <div key={l} className="lang-item">{l}</div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="sidebar-section">
              <h2 className="sidebar-section-title">Live Projects</h2>
              {data.featuredProjects.map((p) => (
                <div key={p.name} className="profile-link">
                  <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="sidebar-section">
              <h2 className="sidebar-section-title">Certifications</h2>
              {data.certifications.map((c, i) => (
                <div key={i} className="cert-item">
                  <div>{c.title}</div>
                  <div className="cert-item-date">{c.author} · {c.date}</div>
                </div>
              ))}
            </div>
          </aside>

          {/* ── Main Content ── */}
          <main className="resume-main">
            {/* Summary */}
            <section className="section">
              <h2 className="section-title">Professional Summary</h2>
              <p className="summary-text">{data.summary}</p>
            </section>

            {/* Work Experience */}
            <section className="section">
              <h2 className="section-title">Work Experience</h2>
              {data.works.map((w, i) => (
                <div key={i} className="work-entry">
                  <div className="work-position">{w.position}</div>
                  <div className="work-org">{w.org}</div>
                  <div className="work-meta">
                    <span>{w.period}</span>
                    {w.location && (
                      <>
                        <span className="work-meta-dot" />
                        <span>{w.location}</span>
                      </>
                    )}
                  </div>
                  <ul className="work-contributions">
                    {w.contributions.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>
                  {(w as any).tags && (
                    <div className="skills-grid" style={{ marginTop: "0.6rem" }}>
                      {(w as any).tags.map((tag: string) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Personal Projects */}
            <section className="section">
              <h2 className="section-title">Open-Source & Side Projects</h2>
              {data.personalProjects.map((p, i) => (
                <div key={i} className="work-entry">
                  <div className="work-position">{p.position}</div>
                  <div className="work-org">{p.org}</div>
                  <div className="work-meta">
                    <span>{p.period}</span>
                    {p.location && (
                      <>
                        <span className="work-meta-dot" />
                        <span>{p.location}</span>
                      </>
                    )}
                  </div>
                  <ul className="work-contributions">
                    {p.contributions.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>
                  {(p as any).tags && (
                    <div className="skills-grid" style={{ marginTop: "0.6rem" }}>
                      {(p as any).tags.map((tag: string) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* References */}
            <section className="section">
              <h2 className="section-title">References</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                Available upon request.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
