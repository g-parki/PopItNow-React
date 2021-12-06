// eslint-disable-next-line
import * as React from 'react'
import { Time } from './TimesManager'

export type DisplayTime = Pick<Time, 'minutes' | 'seconds' | 'milliseconds'>

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
  const stringVal = value.toString()
  let padded = stringVal
  while (padded.length < digits) {
    padded = `0${padded}`
  }
  return padded
}

const TimeDisplay: React.FunctionComponent<TimeDisplayProps> = ({ time, prefix, classes }) => {
  const stringTime: StringTime = {
    minutes: zeroPad(time.minutes, 2),
    seconds: zeroPad(time.seconds, 2),
    milliseconds: zeroPad(time.milliseconds, 3),
  }

  return (
    <p className={classes ? `${classes} time` : 'time'}>
      {prefix}
      {stringTime.minutes}
      :
      {stringTime.seconds}
      .
      {stringTime.milliseconds}
    </p>
  )
}

TimeDisplay.defaultProps = {
  prefix: undefined,
  classes: undefined,
}

export default TimeDisplay
