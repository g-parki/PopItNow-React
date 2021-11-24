import * as React from 'react';
import SourceCodeLink from './SourceCodeLink';

interface BottomNavProps {
    best_time?: JSX.Element;
}


 
const BottomNav: React.FunctionComponent<BottomNavProps> = ({ best_time }) => {

    return (
        <div className="nav-top">
            <div className="nav-member">
                <SourceCodeLink />
            </div>
            <div className="nav-member best-time time bold-larger">
                {best_time ? <p>Best Time: {best_time}</p> : <p></p>}
            </div>
        </div>
    );
}
 
export default BottomNav;