import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile () {
    const {level} = useContext(ChallengesContext);    

    return (
        <div className={styles.profileContainer}>
            <img className={styles.avatar} src="https://github.com/wixei.png" alt="Paulo Martins" />
            <div>
                <strong>Paulo Martins</strong>
                <p>
                    <img src="/icons/arrowUp.png"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}