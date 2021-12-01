import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TimeDisplay from './TimeDisplay';
import { Time } from './TimesManager'

interface TimerProps {
    initialTime: number,
    sendFinal: (arg: Time) => void,
}
 
const Timer: React.FunctionComponent<TimerProps> = ({ initialTime, sendFinal }) => {

    const [currentTime, setCurrentTime] = useState<Time>({ minutes: 0, seconds: 0, milliseconds: 0, duration: 0 })
    let most_recent_time = useRef({ minutes: 0, seconds: 0, milliseconds: 0, duration: 0 })

    useEffect(() => {
        const timer = setInterval(() => {
            const time: Time = { 
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
                duration: 0,
            }

            let _duration = new Date().getTime() - initialTime
            time.duration = _duration.valueOf()

            time.minutes = Math.floor(_duration/(1000*60))
            _duration = _duration % (1000*60)

            time.seconds = Math.floor(_duration/1000)
            _duration = _duration % 1000
            
            time.milliseconds = _duration
            
            setCurrentTime(time)
            most_recent_time.current = time
        }, 10);
        return () => {
            clearInterval(timer)
            sendFinal(most_recent_time.current)
        };
      }, [initialTime, sendFinal]);

    return (<span className="bold-larger"><TimeDisplay time={currentTime}/></span>);
}
 
export default Timer;

