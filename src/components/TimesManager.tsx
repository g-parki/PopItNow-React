import * as React from 'react';
import TimesTable from './TimesTable';
import { useState } from 'react';
import Timer from './Timer';
import BubbleTable from './BubbleTable';
import BottomNav from './BottomNav';
import BestTime from './BestTime';
import TimeDisplay from './TimeDisplay';

interface TimesManagerProps {
    
}

export interface Time {
    minutes: number,
    seconds: number,
    milliseconds: number,
    duration: number,
}

export const TimerContext = React.createContext(false)
 
const TimesManager: React.FunctionComponent<TimesManagerProps> = () => {

    const [times, setTimes] = useState<Time[]>([])
    const [bestTime, setBestTime] = useState<Time>()
    const [gaming, setGaming] = useState(false)
  
    const startGame = () => {
        setGaming(true)
    }

    const endGame = () => {
        setGaming(false)
    }

    const addTime = (time: Time) => {
        setTimes([time, ...times])
        checkBestTime(time)
    }

    const renderTimer = () => {
        if (gaming) {
            return <Timer initialTime={new Date().getTime()} sendFinal={addTime}/>
        } else {
            const most_recent_time = times[0]
            if (most_recent_time !== undefined) {
                const timer_display_class = most_recent_time === bestTime ? "bold-larger green" : "bold-larger red"
                return <span className={timer_display_class}><TimeDisplay time={most_recent_time}/></span>
            }
        }
    }

    const checkBestTime = (time: Time) => {
        if (bestTime === undefined || (time.duration < bestTime.duration)) {
            setBestTime(time)
            console.log("best time was set")
        }
    }

    return (
        <TimerContext.Provider value={gaming}>
            <BubbleTable requestGameEnd= {endGame} requestGameStart= {startGame}/>
            <div className= "center-text">
                {renderTimer()}
            </div> 
            {bestTime ? <BottomNav best_time={<BestTime best_time={bestTime}/>}/> : <BottomNav />}
        </TimerContext.Provider>
    );
}
 
export default TimesManager;