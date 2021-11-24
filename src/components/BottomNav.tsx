import * as React from 'react';
import SourceCodeLink from './SourceCodeLink';
import { Time } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface BottomNavProps {
    best_time?: Time;
}

const BottomNav: React.FunctionComponent<BottomNavProps> = ({ best_time }) => {

    return (
        <div className="nav-top">
            <div className="nav-member">
                <SourceCodeLink />
            </div>
            <div className="nav-member best-time time bold-larger">
                {best_time ? <TimeDisplay prefix={"Best: "} time={best_time} classes={"no-margin"}/> : null}
            </div>
        </div>
    );
}
 
export default BottomNav;