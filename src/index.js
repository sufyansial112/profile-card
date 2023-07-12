import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
      <SkillList color="red" name="Html" level="expert" />
      <SkillList color="green" name="CSS" level="expert" />
      <SkillList color="blue" name="Javascript" level="intermediate" />
      <SkillList color="pink" name="React.js" level="Begineer" />
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <h3>{props.name}</h3>
      <span>{props.level}</span>
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
