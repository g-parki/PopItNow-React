import * as React from 'react';
import { render, screen } from "@testing-library/react"
import Bubble, { BubbleProps } from '../components/Bubble';
import userEvent from '@testing-library/user-event';

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

        userEvent.click(bubble)

        expect(props.onpress).toHaveBeenCalled
    })

})