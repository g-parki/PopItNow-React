import * as React from 'react';
import { render, screen } from "@testing-library/react"
import TimeDisplay, { DisplayTime } from '../components/TimeDisplay';

describe("<TimeDisplay />", () => {
    it("should render a time with correct zero padding", () => {
        const test_time: DisplayTime = {
            minutes: 3,
            seconds: 2,
            milliseconds: 10,
        }

        render(<TimeDisplay time={test_time} />)
        expect(screen.getByText("03:02.010")).not.toThrow
    })

    it("should render a time with correct lack of zero padding", () => {
        const test_time: DisplayTime = {
            minutes: 5432,
            seconds: 9876,
            milliseconds: 789,
        }

        render(<TimeDisplay time={test_time} />)
        expect(screen.getByText("5432:9876.789")).not.toThrow
    })

    it("should render time with prefix if provided", () => {
        const test_time: DisplayTime = {
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }

        render(<TimeDisplay time={test_time} prefix="Hello " />)
        expect(screen.getByText("Hello 00:00.000")).not.toThrow
    })

    it("should have 'time' class even if no classes are provided", () => {
        const test_time: DisplayTime = {
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }
        render(<TimeDisplay time={test_time} />)
        expect(screen.getByText("00:00.000").className).toEqual("time")
    })

    it("should have 'time' class plus other classes if provided", () => {
        const test_time: DisplayTime = {
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }
        render(<TimeDisplay time={test_time} classes={"test-class-1 test-class-2"}/>)
        expect(screen.getByText("00:00.000").className).toEqual("test-class-1 test-class-2 time")
    })
})