import * as React from 'react';
import { Time } from './TimesManager'

interface TimeDisplayProps {
    time: Time,
}

interface StringTime {
    minutes: string,
    seconds: string,
    milliseconds: string,
}

const zeroPad = (value: number, digits: number): string => {
    const string_val = value.toString()
    
    let padded = string_val
    while (padded.length < digits) {
        padded = "0" + padded
    }
    return padded
}
  
const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({ time }) => {
    
    const string_time: StringTime = {
        minutes: zeroPad(time.minutes, 2),
        seconds: zeroPad(time.seconds, 2),
        milliseconds: zeroPad(time.milliseconds, 3),
    }

    return (<p className="time">{string_time.minutes}:{string_time.seconds}.{string_time.milliseconds}</p>);
}

export default TimeDisplay;