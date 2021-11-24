import * as React from 'react';
import { Time } from './TimesManager'
import TimeDisplay from './TimeDisplay'
import { uniqueId } from 'lodash';

interface BestTimeProps {
    best_time: Time,
}


const BestTime: React.FunctionComponent<BestTimeProps> = ({ best_time }) => { 
    return (
        <span key={uniqueId()} className={"new-best"}><TimeDisplay time={best_time} /></span>
    );
}
 
export default BestTime;