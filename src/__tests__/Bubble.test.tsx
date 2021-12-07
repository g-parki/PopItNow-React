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
      onPress: (x: number, y: number) => {},
    }

    const { value, row, col, onPress } = props

    render(<Bubble value={value} row={row} col={col} onPress={onPress} />)
    const bubble = screen.getByAltText('blue button')

    fireEvent.mouseDown(bubble)

    // eslint-disable-next-line
    expect(onPress).toHaveBeenCalled
  })
})
