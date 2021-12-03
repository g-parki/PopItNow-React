import * as React from 'react';
import { Time } from './TimesManager'

export type DisplayTime = Pick<Time, "minutes" | "seconds" | "milliseconds">

interface TimeDisplayProps {
    time: DisplayTime,
    prefix?: string,
    classes?: string,
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
  
const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({ time, prefix, classes}) => {
    
    const string_time: StringTime = {
        minutes: zeroPad(time.minutes, 2),
        seconds: zeroPad(time.seconds, 2),
        milliseconds: zeroPad(time.milliseconds, 3),
    }

    return (<p className={classes ? classes + " time" : "time"}>{prefix}{string_time.minutes}:{string_time.seconds}.{string_time.milliseconds}</p>);
}

export default TimeDisplay;