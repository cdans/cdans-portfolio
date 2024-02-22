import "./App.css";

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
    <div>
      <h1>Christoph</h1>
      <p>
        I am a passionate and driven student at the Technical University Munich
        with a strong interest in software engineering and product development.
        I have a proven track record of working in high-performing teams and
        delivering high-quality software products. I am seeking opportunities to
        further develop my technical skills and contribute to innovative
        projects.
      </p>
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
      {content.map((item) => (
        <p id="item">{item}</p>
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
          "Master of Science in Information Systems at Technical University Munich (April 2023 - present)",
          "Bachelor of Science in Information Systems at University of Münster (October 2017 - April 2021)",
          "High School Diploma at Stiftung Louisenlund (August 2011 - June 2017)",
        ]}
      />

      <ProfileBox
        id="experience"
        title="Working Experience"
        content={[
          "Product Engineering Working Student at Ivy (October 2023 - present)",
          "Software Engineer at Forget Finance (August 2021 - September 2023)",
          "Bachelor Student at Echometer (January 2021 - April 2021)",
          "Product Intern at Flaschenpost (September 2020 - November 2020)",
          "Product Intern at Compeon (February 2020 - April 2020)",
          "Quality Working Student at Thalia (March 2019 - August 2019)",
        ]}
      />

      <ProfileBox
        id="engagement"
        title="Extracurricular Engagement"
        content={["Project Mentor at TechLabs Berlin (April 2022 - present)"]}
      />

      <ProfileBox
        id="skills"
        title="Technical Skills"
        content={[
          "Proficient in Swift",
          "Experience with React Native",
          "Familiarity with JavaScript and Java",
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

const App = () => {
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

export default App;
