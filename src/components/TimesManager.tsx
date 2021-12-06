import * as React from 'react'
import { useState } from 'react'
import Timer from './Timer'
import BubbleTable from './BubbleTable'
import BottomNav from './BottomNav'
import TimeDisplay from './TimeDisplay'

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
  const [attempts, setAttempts] = useState(0)
  const [gaming, setGaming] = useState(false)

  const startGame = () => {
    setGaming(true)
  }

  const endGame = () => {
    setGaming(false)
    setAttempts(attempts + 1)
  }

  const checkBestTime = (time: Time) => {
    if (bestTime === undefined || (time.duration < bestTime.duration)) {
      setBestTime(time)
    }
  }

  const addTime = (time: Time) => {
    setTimes([time, ...times])
    checkBestTime(time)
  }

  const renderTimer = () => {
    if (gaming) {
      return <Timer initialTime={new Date().getTime()} sendFinal={addTime} />
    }
    const mostRecentTime = times[0]
    if (mostRecentTime !== undefined) {
      const timerDisplayClasses = (mostRecentTime === bestTime) ? 'bold-larger green' : 'bold-larger red'
      return <TimeDisplay time={mostRecentTime} classes={timerDisplayClasses} />
    }
    return undefined
  }

  return (
    <TimerContext.Provider value={gaming}>
      <BubbleTable requestGameEnd={endGame} requestGameStart={startGame} />
      <div className="center-text">
        {renderTimer()}
      </div>
      <BottomNav attempts={attempts} bestTime={bestTime} />
    </TimerContext.Provider>
  )
}

export default TimesManager
