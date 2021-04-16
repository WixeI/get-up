import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderProps {
    children: ReactNode;
}

interface CountdownContextData {
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps) {
    const {newChallenge} = useContext(ChallengesContext);

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(60 * 0.05); //Segundos
    const [currentTime, setCurrentTime] = useState(time); //Segundos
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setHasFinished(false);
        setIsActive(false);
        setCurrentTime(time);
    }

    useEffect(() => {
        if (isActive && currentTime == 0) {
            setIsActive(false);
            setHasFinished(true);
            newChallenge();
        }
        else if (isActive) {
            //Adiciona delay de 1s (1000ms) antes de mudar
            countdownTimeout = setTimeout(() => {
                setCurrentTime(currentTime - 1) //Decrementa
            }, 1000);
        }
    }, [isActive, currentTime]);

    return (
        <CountdownContext.Provider
            value={{
                //consts
                isActive,
                hasFinished,
                minutes,
                seconds,
                //functions 
                startCountdown,
                resetCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    );
}