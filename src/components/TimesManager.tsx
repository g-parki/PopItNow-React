import * as React from 'react';
import TimesTable from './TimesTable';
import { useState } from 'react';
import Timer from './Timer';
import BubbleTable from './BubbleTable';

interface TimesManagerProps {
    
}

export interface Time {
    minutes: number,
    seconds: number,
    milliseconds: number,
}

export const TimerContext = React.createContext(false)
 
const TimesManager: React.FunctionComponent<TimesManagerProps> = () => {

    const [times, setTimes] = useState<Time[]>([])
    const [gaming, setGaming] = useState(false)
  
    const startGame = () => {
        setGaming(true)
    }

    const endGame = () => {
        setGaming(false)
    }

    const addTime = (time: Time) => {
        setTimes([time, ...times])
    }

    const renderTimer = () => {
        if (gaming) {
            return <Timer initialTime={new Date().getTime()} sendFinal={addTime}/>
        }
    }

    return (
        <TimerContext.Provider value={gaming}>
            <BubbleTable requestGameEnd= {endGame} requestGameStart= {startGame}/>
            <div className= "center-text">
                {renderTimer()}
                <TimesTable times={times}/>
            </div> 
        </TimerContext.Provider>
    );
}
 
export default TimesManager;