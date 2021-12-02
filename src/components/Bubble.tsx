import * as React from 'react';

export interface BubbleProps {
    value: boolean,
    row: number,
    col: number,
    onpress: (arg1: number, arg2: number) => void,
}

interface InteractionEvents {
    touch: undefined | (() => void),
    click: undefined | (() => void),
}

interface ImageData {
    readonly src: string,
    readonly alt: string,
}

interface Images {
    readonly pressed: ImageData,
    readonly unpressed: ImageData
}

const images: Images= {
    pressed: {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg",
        alt: "blue button",
    },
    unpressed: {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Button_Icon_Blue.svg",
        alt: "white button",
    }
}

const Bubble: React.FunctionComponent<BubbleProps> = ({ value, row, col, onpress }) => {

    const interaction_event = (): InteractionEvents => {
        if ('ontouchstart' in window)
            return { touch: handlePress, click: undefined }
        return { touch: undefined, click: handlePress }
    }

    const handlePress = () => {
        onpress(row, col)
    }

    const getAlt = () => {
        return value ? images.pressed.alt : images.unpressed.alt
    }

    const getSrc = () => {
        return value ? images.pressed.src : images.unpressed.src
    }

    const events = interaction_event()

    return (
        <div>
            <img width="32" onMouseDown={events.click} onTouchStart={events.touch} alt={getAlt()} src={getSrc()}></img>
        </div>
    );
}
 
export default Bubble;