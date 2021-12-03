import * as React from 'react';
import { uniqueId } from 'lodash';
import { Time, TimerContext } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface TimesTableProps {
    times: Time[],
}

const TimesTable: React.FunctionComponent<TimesTableProps> = ({ times }) => {
    const gaming = React.useContext(TimerContext)
    
    const timeRows = () => {
        const rows: JSX.Element[] = []

        for (const [index, time] of times.entries()) {
            const classes = (index === 0 && !gaming) ? "bold-larger green" : undefined
            rows.push(<td key={uniqueId()}><TimeDisplay time={time} classes={classes} /></td>)
        }
        return rows
    }

    return (
        <table className= "centered">
            <tbody>
            {timeRows().map((row) => <tr key={uniqueId()}> {row} </tr>)}
            </tbody>
        </table>
    )
}
 
export default TimesTable;