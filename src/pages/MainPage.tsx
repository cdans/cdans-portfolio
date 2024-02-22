import "./MainPage.css";

import { Fragment, useState } from "react";

const LINKS = [
  { title: "Education", id: "education" },
  { title: "Experience", id: "experience" },
  { title: "Skills", id: "skills" },
];

const NavigationBar = () => {
  const handleClick = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      {LINKS.map(({ id, title }) => (
        <a href={`#${id}`} onClick={handleClick(id)}>
          {title}
        </a>
      ))}
    </div>
  );
};

const Summary = () => {
  return (
    <div className="container">
      <div id="summary">
        <h1 className="header-title">CHRISTOPH DANSARD</h1>
        <div className="summary-points">
          <span>Software Engineer</span>
          <span>Product Manager</span>
          <span>Startup Enthusiast</span>
        </div>
        <p>
          Experienced software engineer and product manager with a passion for
          innovation and startups. Expertise in conceptualizing, developing, and
          deploying software solutions to drive user value. Proven track record
          of successful collaboration with cross-functional teams and companies
          to meet user needs and achieve business objectives. Constantly seeking
          new challenges to make a positive impact through innovative solutions.
        </p>
        <div id="links">
          <a
            className="button"
            href="https://www.linkedin.com/in/christoph-dansard-212293161/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="button" href="mailto:ch.dansard@gmail.com">
            Email
          </a>
          <a
            className="button"
            href="https://github.com/cdans"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

type ProfileBoxProps = {
  id: string;
  title: string;
  content: string[];
};

const ProfileBox = ({ id, title, content }: ProfileBoxProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const visibleContent = showMore ? content : content.slice(0, 3);

  return (
    <div className="container" id={id}>
      <div className="profile-box">
        <h1>{title}</h1>
        {visibleContent.map((item, indexItem) => (
          <Fragment key={indexItem}>
            {item.split("\n").map((line, indexLine) => (
              <p key={indexLine}>{line}</p>
            ))}
            {indexItem !== visibleContent.length - 1 && <hr />}
          </Fragment>
        ))}
        {!showMore && content.length > 3 && (
          <a className="show-more" onClick={handleShowMore}>
            Show more
          </a>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <ProfileBox
        id="education"
        title="Education"
        content={[
          "Master of Science in Information Systems at Technical University Munich\n(April 2023 - present)",
          "Bachelor of Science in Information Systems at University of Münster\n(October 2017 - April 2021)",
          "High School Diploma at Stiftung Louisenlund\n(August 2011 - June 2017)",
        ]}
      />

      <ProfileBox
        id="experience"
        title="Working Experience"
        content={[
          "Product Engineering Working Student at Ivy\n(October 2023 - present)",
          "Software Engineer at Forget Finance\n(August 2021 - September 2023)",
          "Bachelor Student at Echometer\n(January 2021 - April 2021)",
          "Product Intern at Flaschenpost\n(September 2020 - November 2020)",
          "Product Intern at Compeon\n(February 2020 - April 2020)",
          "Quality Working Student at Thalia\n(March 2019 - August 2019)",
        ]}
      />

      <ProfileBox
        id="skills"
        title="Technical Skills"
        content={[
          "Proficient in TypeScript, JavaScript, and Python",
          "Much experience with React (Native) and Node.js",
          "Datawarehousing with SQL and NoSQL databases",
          "Familiarity with Kotlin and Java",
        ]}
      />

      <ProfileBox
        id="hobbies"
        title="Hobbies"
        content={[
          "Cooking",
          "Soccer",
          "Field Hockey",
          "Table Tennis",
          "Sailing",
        ]}
      />
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="content">
        <Summary />
        <Profile />
      </div>
    </>
  );
};
