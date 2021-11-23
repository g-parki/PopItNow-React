import * as React from 'react';

interface BubbleProps {
    value: boolean,
    row: number,
    col: number,
    onclick: (arg1: number, arg2: number) => void,
}

interface InteractionEvents {
    touch: undefined | (() => void),
    click: undefined | (() => void),
}

const PRESSED_LINK: string = "https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg"
const UNPRESSED_LINK: string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Button_Icon_Blue.svg"

const Bubble: React.FunctionComponent<BubbleProps> = ({ value, row, col, onclick }) => {

    const interaction_event = (): InteractionEvents => {
        if ('ontouchstart' in window)
            return { touch: handleClick, click: undefined }
        return { touch: undefined, click: handleClick }
    }

    const handleClick = () => {
        onclick(row, col)
    }

    const events = interaction_event()

    return (
        <div>
            <img width="32" alt="Glass button blue" onClick={events.click} onTouchStart={events.touch} src={value ? UNPRESSED_LINK : PRESSED_LINK}></img>
        </div>
    );
}
 
export default Bubble;