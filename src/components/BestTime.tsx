import * as React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import { Time } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface BestTimeProps {
    times: Time[],
}

const duration = (time: Time): number => {
    let _duration = 0
    _duration += time.minutes * 1000 * 60
    _duration += time.seconds * 1000
    _duration += time.milliseconds
    return _duration
}
 
const BestTime: React.FunctionComponent<BestTimeProps> = ({ times }) => {

    const [_class, set_Class] = useState("new-best")

    useLayoutEffect(() => {
        set_Class("new-best")
        console.log("Layout effect ran")
    })

    const unset_class = () => {
        console.log("Unset ran")
        set_Class("")
    }

    const _durations = times.map(duration)
    const _min_duration = Math.min(..._durations)
    const _min_time = times[_durations.indexOf(_min_duration)] 

    return (
        <span className={_class} onAnimationEnd={unset_class}><TimeDisplay time={_min_time} /></span>
    );
}
 
export default BestTime;