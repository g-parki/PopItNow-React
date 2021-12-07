// eslint-disable-next-line
import * as React from 'react'
import { useState } from 'react'
import { uniqueId } from 'lodash'
import Bubble from './Bubble'
import { TimerContext } from './TimesManager'

export interface BubbleTableProps {
    requestGameEnd: () => void,
    requestGameStart: () => void,
}

const ROWS = 5
const COLUMNS = 6

const createInitialGrid = (row: number, col: number): boolean[][] => {
  const inner: boolean[] = []
  const grid: boolean[][] = []
  for (let j = 0; j < col; j++) {
    inner[j] = true
  }
  for (let i = 0; i < row; i++) {
    grid[i] = [...inner]
  }
  return grid
}

const copyGrid = (grid: boolean[][]): boolean[][] => {
  const newGrid: boolean[][] = []
  grid.map((row) => newGrid.push([...row]))
  return newGrid
}

const initialGrid: boolean[][] = createInitialGrid(ROWS, COLUMNS)

const BubbleTable: React.FunctionComponent<BubbleTableProps> = ({ requestGameEnd, requestGameStart }) => {
  const [Grid, setGrid] = useState<boolean[][]>(copyGrid(initialGrid))
  const gaming = React.useContext(TimerContext)

  const gridIsClear = (grid: boolean[][]): boolean => grid.every((row) => row.every((el) => !el))

  const doToggle = (i: number, j: number) => {
    const grid = copyGrid(Grid)
    grid[i][j] = !grid[i][j]
    if (gaming) {
      if (gridIsClear(grid)) {
        requestGameEnd()
        return setGrid(copyGrid(initialGrid))
      }
    } else {
      requestGameStart()
    }
    return setGrid(grid)
  }

  return (
    <table className="centered">
      <tbody>
        { Grid.map((row, i) => (
          <tr key={uniqueId()}>
            {row.map((val, j) => (
              <td key={uniqueId()}>
                <Bubble value={val} row={i} col={j} onPress={doToggle} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BubbleTable
