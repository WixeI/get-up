import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown () {
    const { minutes, seconds, startCountdown, resetCountdown, isActive, hasFinished} = useContext(CountdownContext);

    //padStart é uma função com banco de dados.
    //padStart(numeroMaximoDeCaracteres, caractereParaEncherAStringAtéAtingirONumeroMáximo)
    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('', 2);
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('', 2);

    return (
        <div className={styles.countdownContainer}>
            <div className={styles.timer}>
                <div>
                    <span>{leftMinute}</span>
                    <span>{rightMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{leftSecond}</span>
                    <span>{rightSecond}</span>
                </div>
            </div>


            { hasFinished ? (
                <button 
                className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                { isActive ? (
                    <button 
                    className={`${styles.countdownButton} ${styles.resetButton}`}
                    onClick={resetCountdown}
                    >
                        Abandonar Ciclo
                    </button>
                ) : (
                    <button 
                    className={`${styles.countdownButton} ${styles.startButton}`}
                    onClick={startCountdown}
                    >
                        Iniciar Ciclo
                    </button>
                )}
                </>
            )}

            

            
            

        </div>
    );
}