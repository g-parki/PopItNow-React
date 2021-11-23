import * as React from 'react';
import Bubble from './Bubble';
import { useState } from 'react';
import { uniqueId } from 'lodash'
import { TimerContext } from './TimesManager'

interface BubbleTableProps {
    requestGameEnd: () => void,
    requestGameStart: () => void,
}

const ROWS = 5;
const COLUMNS = 6;

const create_initial_grid = (row: number, col: number): boolean[][] => {
    let _inner: boolean[] = []
    let _grid: boolean[][] = []
    for (let j=0; j < col; j++) {
        _inner[j] = true
    }
    for (let i=0; i < row; i++) {
        _grid[i] = [..._inner] 
    }
    return _grid
}

const copy_grid = (grid: boolean[][]): boolean[][] => {
    const _grid: boolean[][] = []
    grid.map(row => _grid.push([...row]))
    return _grid
}

const initial_grid: boolean[][] = create_initial_grid(ROWS, COLUMNS)

const BubbleTable: React.FunctionComponent<BubbleTableProps> = ({ requestGameEnd, requestGameStart }) => {

    const [Grid, setGrid] = useState<boolean[][]>(copy_grid(initial_grid))
    const gaming = React.useContext(TimerContext)

    const doToggle = (i: number, j: number) => {
        let _grid = copy_grid(Grid)
        _grid[i][j] = !_grid[i][j]
        if (gaming) {
            if (gridIsClear(_grid)) {
                requestGameEnd()
                return setGrid(copy_grid(initial_grid))
            }
        } else {
            requestGameStart()
        }
        return setGrid(_grid)
    }

    const gridIsClear = (grid: boolean[][]): boolean => {
        return grid.every(row => row.every(el => !el))
    }

    return (  
        <table className= "centered">
            <tbody>
            { Grid.map((row, i) => (
                <tr key={uniqueId()}>{row.map((val, j) => (
                    <td key={uniqueId()}>
                        <Bubble value={val} row={i} col={j} onclick={doToggle} />
                    </td>
                ))}</tr>
            ))}
            </tbody>
        </table>
    )
}

export default BubbleTable;