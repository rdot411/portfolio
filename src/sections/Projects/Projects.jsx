import React from 'react';
import styles from './ProjectStyles.module.css';
import pokedex from '../../assets/pokedex.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import restrauntTemp from '../../assets/RestrauntLogo.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <>
    <h1 className="sectionTitle">Projects</h1>
    <section id='projects' className={styles.container}>
      <div className={styles.projectsContainer}>
        <ProjectCard src={pokedex} link='https://whosthatmon.netlify.app/' h3='WhosThatMon' p='Pokedex Project using HTML, CSS, JavaScript and PokeApi'/>
        <ProjectCard src={restrauntTemp} link='https://restemplate.netlify.app/' h3='RestTemplate' p='Frontend restraunt template using HTML, CSS, React and Tailwind CSS'/>
        {/*<ProjectCard src={hipsster} link='https://github.com/' h3='hipssterr' p='glasses'/>
        <ProjectCard src={fitlift} link='https://github.com/' h3='fitlift' p='fitness shop'/>*/}
      </div>
    </section>
    </>
  );
}

export default Projects;
