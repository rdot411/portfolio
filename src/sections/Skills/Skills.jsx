import styles from './SkillsStyles.module.css';
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='TypeScript'/>
            <SkillList src={checkMarkIcon} skill='Node'/>
        </div>
        <hr id='skillshr'/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='React'/>
            <SkillList src={checkMarkIcon} skill='Svelte'/>
            <SkillList src={checkMarkIcon} skill='Angular'/>
        </div>
        <hr id='skillshr'/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Python'/>
            <SkillList src={checkMarkIcon} skill='C'/>
        </div>
        <hr id='skillshr'/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='PHP'/>
        </div>
        <hr id='skillshr'/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='MySQL'/>
            <SkillList src={checkMarkIcon} skill='MongoDB'/>
        </div>

    </section>
  )
}

export default Skills
