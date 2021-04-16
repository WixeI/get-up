import { createContext, ReactNode, useEffect, useState } from "react";

import challenges from "../../challenges.json"

interface Challenge {
    type: string;
    description: string;
    amount: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    challengesCompleted: number;
    levelUp: () => void;
    newChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider ({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const experienceToNextLevel = Math.pow((level + 1) * 3, 2);

    function levelUp () {
        setLevel(level + 1);
    }

    function gainEXP (amount: number) {
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExperience);
    }

    function newChallenge () {
        const random = Math.floor(Math.random() * (challenges.length - 1));
        setActiveChallenge(challenges[random]);
    }

    function resetChallenge () {
        setActiveChallenge(null);
    }

    function completedChallenge () {
        if (!activeChallenge) {
            return;
        }
        
        const { amount } = activeChallenge;

        gainEXP(amount);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value = {{
                level,
                currentExperience,
                activeChallenge,
                experienceToNextLevel,
                challengesCompleted,
                levelUp,
                newChallenge,
                resetChallenge,
                completedChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}