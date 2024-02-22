import "./App.css";

const Profile = () => {
  return (
    <div>
      <h1>Education</h1>
      <p>
        Master of Science in Information Systems at Technical University Munich
        (April 2023 - present)
      </p>
      <p>
        Bachelor of Science in Information Systems at University of Münster
        (October 2017 - April 2021)
      </p>
      <p>
        High School Diploma at Stiftung Louisenlund (August 2011 - June 2017)
      </p>

      <h1>Working Experience</h1>
      <p>Product Engineering Working Student at Ivy (October 2023 - present)</p>
      <p>Software Engineer at Forget Finance (August 2021 - September 2023)</p>
      <p>Bachelor Student at Echometer (January 2021 - April 2021)</p>
      <p>Product Intern at Flaschenpost (September 2020 - November 2020)</p>
      <p>Product Intern at Compeon (February 2020 - April 2020)</p>
      <p>Quality Working Student at Thalia (March 2019 - August 2019)</p>

      <h1>Extracurricular Engagement</h1>
      <p>Project Mentor at TechLabs Berlin (April 2022 - present)</p>

      <h1>Technical Skills</h1>
      <p>Proficient in Swift</p>
      <p>Experience with React Native</p>
      <p>Familiarity with JavaScript and Java</p>

      <h1>Hobbies</h1>
      <p>Cooking</p>
      <p>Soccer</p>
      <p>Field Hockey</p>
      <p>Table Tennis</p>
      <p>Sailing</p>

      <h1>Other</h1>
      <p>Fluent in English (C1 level)</p>
      <p>
        Actively involved in social activities such as mentoring at TechLabs
        Berlin
      </p>
      <p>
        Interested in entrepreneurship and innovation, as demonstrated by
        involvement in various startups and initiatives
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default App;
