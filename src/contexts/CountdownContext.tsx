import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import Countdown from '../components/Home-Main/Countdown';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
    time: number;
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;

    startCountdown: () => void;
    stopCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {

    let countdownTimeout: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    function stopCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(25 * 60)
        setHasFinished(false)
    }
    return (
        <CountdownContext.Provider value={
            {
                time,
                isActive,
                hasFinished,
                minutes,
                seconds,
                startCountdown,
                stopCountdown
            }
        }>
            { children}
        </CountdownContext.Provider >
    )
}