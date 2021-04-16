import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {  
    const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    
    function handleCompletedChallenge() {
        completedChallenge();
        resetCountdown();
    }
    
    function handleFailedChallenge() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                <header>
                    <strong>Ganhe {activeChallenge.amount}xp</strong>
                </header>
                <main>
                    <img src="/icons/arrowUp.png" alt="new-challenge" />
                    <strong>Novo Desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button 
                        className={styles.completedButton}
                        onClick={handleCompletedChallenge}
                    >
                        Completaste?
                    </button>
                    <button 
                        className={styles.failedButton}
                        onClick={handleFailedChallenge}
                    >
                        Falhaste?
                    </button>
                </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="/icons/arrowUp.png" alt="new-challenge" />
                    Avance de level completando desafios.
                </p>
                </div>
            )}

            

            
        </div>
    );
}