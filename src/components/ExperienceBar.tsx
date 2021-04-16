import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {
    const { experienceToNextLevel, currentExperience } = useContext(ChallengesContext);

    const percentageBar = (currentExperience * 100)/ experienceToNextLevel;
    
    return (
        <header className={styles.experienceBarContainer}>
            <span>0xp</span>
            <div className={styles.bar}>
                <div 
                    className={styles.progress}
                    style={{width: `${percentageBar}%`}}   
                />
                <span className={styles.currentExperience}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}