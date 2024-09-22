import React, { useEffect, useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio"}
          sortTitle={"Complete Project"}
        />

        <div className={`project__wrapone`}>
          {projectList.map(({ heading, id, image, link, subHeading }, index) => (
            <ProjectCard
              key={id}
              image={image}
              link={link}
              heading={heading}
              subHeading={subHeading}
              index={index}
              navigate="/protfolio"
            />
          ))}
        </div>

        <div className="custom__hover">
          <Link to={"/protfolio"}
            className="hover__circle mauto"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="box">
              <i className="bi bi-arrow-up-right"></i>
              <span className="textmore"> Click More Work </span>
            </span>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default Projects;
