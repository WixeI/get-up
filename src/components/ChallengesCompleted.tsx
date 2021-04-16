import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengesCompleted.module.css'

export function ChallengesCompleted () {
    const {challengesCompleted} = useContext(ChallengesContext);
    
    return (
        <div className={styles.challengesCompletedContainer}>
            <span>Desafios Completos</span>
            <p>{challengesCompleted}</p>
        </div>
    );
}