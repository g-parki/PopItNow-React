import * as React from 'react';
import SourceCodeLink from './SourceCodeLink';
import { Time } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface BottomNavProps {
    attempts: number;
    best_time?: Time;
}

const BottomNav: React.FunctionComponent<BottomNavProps> = ({ best_time, attempts }) => {

    return (
        <div className="nav-bottom">
            <div className="nav-member">
                <SourceCodeLink />
            </div>
            <div className="nav-member align-left time bold-larger">
                <p>Attempts: {attempts}</p>
            </div>
            <div className="nav-member align-left time bold-larger">
                {best_time ? <TimeDisplay prefix={"Best: "} time={best_time} classes={"no-margin"}/> : null}
            </div>
        </div>
    );
}
 
export default BottomNav;