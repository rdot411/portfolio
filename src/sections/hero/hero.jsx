import styles from './HeroStyle.module.css';
import heroImgLight from '../../assets/logo.png';
import heroImgDark from '../../assets/logored.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const heroImg = theme === 'light' ? heroImgLight : heroImgDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer} >
            <img className={styles.logo} src={heroImg} id='logo' alt='website logo'/>
            <img className={styles.colorMode} src={themeIcon} alt='color mode icon' onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Raghav<br/>Tiwari</h1>
            <h2>Aspiring Frontend/Backend Developer</h2>
            <span>
                <a href='https://github.com/' target='_blank'>
                <img src={githubIcon} alt='github icon'/>
                </a>

                <a href='https://linkedin.com/' target='_blank'>
                <img src={LinkedinIcon} alt='linkedin icon'/>
                </a>
            </span>
        
            <p className={styles.description}>I'm currently studying/interested in developing professinal and modern web apps, programs and websites.</p>
            <a href={CV} download>
                <button  className='hover'>
                    CV
                </button>
            </a> 
        </div>
    </section>
  )
}

export default hero
