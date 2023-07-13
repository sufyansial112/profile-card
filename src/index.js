import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Skillss = [
  {
    skill: "HTML",
    level: "Expert",
    color: "#456712",
  },
  {
    skill: "CSS",
    level: "Expert",
    color: "#678906",
  },
  {
    skill: "Javascript",
    level: "Intermediate",
    color: "#987698",
  },
  {
    skill: "React.js",
    level: "Begineer",
    color: "#978540",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <Skill />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/images.jpg"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Sufyan Sial</h1>
      <p>
        Front-end web developer with enhance knowledge in development and have
        learned html css javacript and react.js. This profile card is my 2nd
        project using react.js. I am eager to learn and explore more from it and
        deermined to achieve good position in this field
      </p>
    </div>
  );
}

function Skill() {
  return (
    <div className="skill-list">
      {Skillss.map((skill) => (
        <SkillList
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function SkillList({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <h3>{skill}</h3>
      <span>{level}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
