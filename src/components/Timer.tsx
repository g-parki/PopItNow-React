import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TimeDisplay from './TimeDisplay';
import { Time } from './TimesManager'

interface TimerProps {
    initialTime: number,
    sendFinal: (arg: Time) => void,
}
 
const Timer: React.FunctionComponent<TimerProps> = ({initialTime, sendFinal}) => {

    const [currentTime, setCurrentTime] = useState<Time>({minutes: 0, seconds: 0, milliseconds: 0})
    let most_recent_time = useRef({minutes: 0, seconds: 0, milliseconds:0 })

    useEffect(() => {
        const timer = setInterval(() => {
            let duration = new Date().getTime() - initialTime
            const minutes = Math.floor(duration/1000/60)
            duration -= minutes * 1000 * 60
            const seconds = Math.floor(duration/1000)
            duration -= seconds * 1000
            const time = { 
                minutes: minutes,
                seconds: seconds,
                milliseconds: duration,
            }
            setCurrentTime(time)
            most_recent_time.current = time

        }, 10);
        return () => {
            clearInterval(timer)
            sendFinal(most_recent_time.current)
        };
      }, [initialTime, sendFinal]);

    return (<span className="bold"><TimeDisplay time={currentTime}/></span>);
}
 
export default Timer;

