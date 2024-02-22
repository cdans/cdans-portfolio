import "./App.css";

import { Analytics } from "@vercel/analytics/react";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
    </div>
  );
};

const Summary = () => {
  return (
    <div id="summary">
      <h1>Christoph</h1>
      <p>
        I am a passionate and driven student at the Technical University Munich
        with a strong interest in software engineering and product development.
        I have a proven track record of working in high-performing teams and
        delivering high-quality software products. I am seeking opportunities to
        further develop my technical skills and contribute to innovative
        projects.
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
  );
};

type ProfileBoxProps = {
  id: string;
  title: string;
  content: string[];
};

const ProfileBox = ({ id, title, content }: ProfileBoxProps) => {
  return (
    <div className="profile-box" id={id}>
      <h1>{title}</h1>
      {content.map((item, indexItem) => (
        <>
          {item.split("\n").map((line, indexLine) => (
            <p key={indexLine}>{line}</p>
          ))}
          {indexItem != content.length - 1 && <hr />}
        </>
      ))}
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
        id="engagement"
        title="Extracurricular Engagement"
        content={["Project Mentor at TechLabs Berlin\n(April 2022 - present)"]}
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

const App = () => {
  return (
    <>
      <Analytics />
      <NavigationBar />
      <div className="content">
        <Summary />
        <Profile />
      </div>
    </>
  );
};

export default App;
