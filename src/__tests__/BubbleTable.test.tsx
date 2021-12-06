// eslint-disable-next-line
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import BubbleTable, { BubbleTableProps } from '../components/BubbleTable'

describe('<BubbleTable />', () => {
  it('should have 30 bubbles in 5 rows', () => {
    const props: BubbleTableProps = {
      requestGameEnd: () => {},
      requestGameStart: () => {},
    }

    const { requestGameEnd, requestGameStart } = props
    render(<BubbleTable requestGameEnd={requestGameEnd} requestGameStart={requestGameStart} />)
    const bubbles = screen.getAllByAltText('blue button')
    const rows: (HTMLElement | null)[] = [
      ...new Set(
        bubbles.map((bubble) => bubble.closest('tr')),
      ),
    ]

    expect(rows.length).toEqual(5)
    expect(bubbles.length).toEqual(30)
  })

  it('should toggle bubble on mousedown', async () => {
    const props: BubbleTableProps = {
      requestGameEnd: () => {},
      requestGameStart: () => {},
    }
    const { requestGameEnd, requestGameStart } = props
    render(<BubbleTable requestGameEnd={requestGameEnd} requestGameStart={requestGameStart} />)
    const bubble = screen.getAllByAltText('blue button')[0]
    fireEvent.mouseDown(bubble)

    expect(screen.getAllByAltText('white button').length).toEqual(1)
    expect(screen.getAllByAltText('blue button').length).toEqual(29)
  })

  it('should call requestGameStart function when bubble is pressed', async () => {
    const props: BubbleTableProps = {
      requestGameEnd: () => {},
      requestGameStart: () => {},
    }
    const { requestGameEnd, requestGameStart } = props
    render(<BubbleTable requestGameEnd={requestGameEnd} requestGameStart={requestGameStart} />)
    const bubble = screen.getAllByAltText('blue button')[0]
    fireEvent.mouseDown(bubble)

    // eslint-disable-next-line
    expect(props.requestGameStart).toHaveBeenCalled
  })

  it('should call requestGameEnd function when all bubbles are pressed', async () => {
    const gameStart = jest.fn()
    gameStart.mockImplementation(() => {})

    const gameEnd = jest.fn()
    gameEnd.mockImplementation(() => {})

    const props: BubbleTableProps = {
      requestGameEnd: gameEnd,
      requestGameStart: gameStart,
    }

    const { requestGameEnd, requestGameStart } = props
    render(<BubbleTable requestGameEnd={requestGameEnd} requestGameStart={requestGameStart} />)
    const bubbles = screen.getAllByAltText('blue button')
    bubbles.map((bubble) => fireEvent.mouseDown(bubble))

    // eslint-disable-next-line
    expect(props.requestGameEnd).toHaveBeenCalled
    expect(props.requestGameStart).toHaveBeenCalledTimes(1)
  })
})
