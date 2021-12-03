import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import BubbleTable, { BubbleTableProps } from '../components/BubbleTable';

describe("<BubbleTable />", () => {

    it("should have 30 bubbles in 5 rows", () => {
        const props: BubbleTableProps = {
            requestGameEnd: () => {},
            requestGameStart: () => {},
        }
        render(<BubbleTable {...props} />)
        const bubbles = screen.getAllByAltText("blue button")
        let rows: (HTMLElement | null)[] = [
            ...new Set(
                bubbles.map(bubble => bubble.closest("tr"))
            )
        ]

        expect(rows.length).toEqual(5)
        expect(bubbles.length).toEqual(30)
    })

    it("should toggle bubble on mousedown", async () => {
        const props: BubbleTableProps = {
            requestGameEnd: () => {},
            requestGameStart: () => {},
        }
        render(<BubbleTable {...props} />)
        const bubble = screen.getAllByAltText("blue button")[0]
        fireEvent.mouseDown(bubble)

        expect(screen.getAllByAltText("white button").length).toEqual(1)
        expect(screen.getAllByAltText("blue button").length).toEqual(29)
        
    })

    it("should call requestGameStart function when bubble is pressed", async () => {
        const props: BubbleTableProps = {
            requestGameEnd: () => {},
            requestGameStart: () => {},
        }
        render(<BubbleTable {...props} />)
        const bubble = screen.getAllByAltText("blue button")[0]
        fireEvent.mouseDown(bubble)

        expect(props.requestGameStart).toHaveBeenCalled
    })

    it("should call requestGameEnd function when all bubbles are pressed", async () => {
        const gameStart = jest.fn()
        gameStart.mockImplementation(() => {})

        const gameEnd = jest.fn()
        gameEnd.mockImplementation(() => {})

        const props: BubbleTableProps = {
            requestGameEnd: gameEnd,
            requestGameStart: gameStart,
        }
        render(<BubbleTable {...props} />)
        const bubbles = screen.getAllByAltText("blue button")
        for (const bubble of bubbles) {
            fireEvent.mouseDown(bubble)
        }
        expect(props.requestGameEnd).toHaveBeenCalled
        expect(props.requestGameStart).toHaveBeenCalledTimes(1)
    })

})
