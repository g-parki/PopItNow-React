// eslint-disable-next-line
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import TimeDisplay from './TimeDisplay'
import { Time } from './TimesManager'

interface TimerProps {
    initialTime: number,
    sendFinal: (arg: Time) => void,
}

const Timer: React.FunctionComponent<TimerProps> = ({ initialTime, sendFinal }) => {
  const [currentTime, setCurrentTime] = useState<Time>({ minutes: 0, seconds: 0, milliseconds: 0, duration: 0 })
  const mostRecentTime = useRef({ minutes: 0, seconds: 0, milliseconds: 0, duration: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const time: Time = {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        duration: 0,
      }

      let duration = new Date().getTime() - initialTime
      time.duration = duration.valueOf()

      time.minutes = Math.floor(duration / (1000 * 60))
      duration %= (1000 * 60)

      time.seconds = Math.floor(duration / 1000)
      duration %= 1000

      time.milliseconds = duration

      setCurrentTime(time)
      mostRecentTime.current = time
    }, 10)
    return () => {
      clearInterval(timer)
      sendFinal(mostRecentTime.current)
    }
  }, [initialTime, sendFinal])

  return (<TimeDisplay time={currentTime} classes="bold-larger" />)
}

export default Timer
