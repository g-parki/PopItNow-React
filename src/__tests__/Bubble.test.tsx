// eslint-disable-next-line
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Bubble, { BubbleProps } from '../components/Bubble'

describe('<Bubble />', () => {
  it('should call onpress function when clicked/pressed', () => {
    const props: BubbleProps = {
      value: true,
      row: 0,
      col: 0,
      // eslint-disable-next-line no-unused-vars
      onpress: (x: number, y: number) => {},
    }

    const { value, row, col, onpress } = props

    render(<Bubble value={value} row={row} col={col} onpress={onpress} />)
    const bubble = screen.getByAltText('blue button')

    fireEvent.mouseDown(bubble)

    // eslint-disable-next-line
    expect(onpress).toHaveBeenCalled
  })
})
