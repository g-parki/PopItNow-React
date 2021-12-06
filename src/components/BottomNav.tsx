// eslint-disable-next-line
import * as React from 'react'
import SourceCodeLink from './SourceCodeLink'
import { Time } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface BottomNavProps {
    attempts: number;
    bestTime?: Time;
}

const BottomNav: React.FunctionComponent<BottomNavProps> = ({ bestTime, attempts }) => (
  <div className="nav-bottom">
    <div className="nav-member">
      <SourceCodeLink />
    </div>
    <div className="nav-member align-left time bold-larger">
      <p>
        Attempts:
        {attempts}
      </p>
    </div>
    <div className="nav-member align-left time bold-larger">
      {bestTime ? <TimeDisplay prefix="Best: " time={bestTime} classes="no-margin" /> : null}
    </div>
  </div>
)

BottomNav.defaultProps = { bestTime: undefined }

export default BottomNav
