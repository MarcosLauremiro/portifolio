import { projects } from "../../database/data";
import { Card } from "./Cards";
import { StyledProject } from "./style";

export const Project = () => {
  return (
    <StyledProject id="PROJECT">
      <div className="project-container">
        <div className="header-project">
          <h1>Meus projetos</h1>
          <p>
            descrição do <span>projeto</span>
          </p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.name}
              descrip={project.descript}
              lingue={project.tech}
              linkApli={project.aplication}
              linkCode={project.github}
            ></Card>
          ))}
        </div>
      </div>
    </StyledProject>
  );
};
