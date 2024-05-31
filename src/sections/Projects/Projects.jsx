import React from 'react';
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1><hr />
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://github.com/' h3='Viberr' p='Streaming App'/>
        <ProjectCard src={freshBurger} link='https://github.com/' h3='freshburger' p='burger shop'/>
        <ProjectCard src={hipsster} link='https://github.com/' h3='hipssterr' p='glasses'/>
        <ProjectCard src={fitlift} link='https://github.com/' h3='fitlift' p='fitness shop'/>
      </div>
    </section>
  );
}

export default Projects;
