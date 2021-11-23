import * as React from 'react';
import { uniqueId } from 'lodash';
import { Time, TimerContext } from './TimesManager'
import TimeDisplay from './TimeDisplay'

interface TimesTableProps {
    times: Time[],
}

const TimesTable: React.FunctionComponent<TimesTableProps> = ({ times }) => {
    const gaming = React.useContext(TimerContext)

    const timeRow = (time: Time, span_class?: string) => {
        if (span_class)
            return (<td key={uniqueId()}><span className={span_class}><TimeDisplay time={time}/></span></td>)
        else
            return (<td key={uniqueId()}><TimeDisplay time={time}/></td>)
    }
    const timeRows = () => {
        const rows: JSX.Element[] = []

        for (const [index, time] of times.entries()) {
            if (index === 0 && !gaming)
                rows.push(timeRow(time, "bold green"))
            else
                rows.push(timeRow(time))
        }
        return rows
    }

    return (
        <table className= "centered">
            <tbody>
            {timeRows().map((row) => <tr key={uniqueId()}>{row}</tr>)}
            </tbody>
        </table>
    )
;
}
 
export default TimesTable;