import * as React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import Bubble, { BubbleProps } from '../components/Bubble';

describe("<Bubble />", () => {
    
    it("should call onpress function when clicked/pressed", () => {
        const props: BubbleProps = {
            value: true,
            row: 0,
            col: 0,
            onpress: (x: number, y: number) => {}
        }

        render(<Bubble {...props} />)
        const bubble = screen.getByAltText("blue button")

        fireEvent.mouseDown(bubble)

        expect(props.onpress).toHaveBeenCalled
    })

})