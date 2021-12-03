import * as React from 'react';

export interface BubbleProps {
    value: boolean,
    row: number,
    col: number,
    onpress: (arg1: number, arg2: number) => void,
}

interface InteractionEvents {
    touch: undefined | (() => void),
    mousedown: undefined | (() => void),
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
    unpressed: {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Button_Icon_Blue.svg",
        alt: "blue button",
    },
    pressed: {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg",
        alt: "white button",
    }
}

const Bubble: React.FunctionComponent<BubbleProps> = ({ value, row, col, onpress }) => {

    const interaction_event = (): InteractionEvents => {
        if ('ontouchstart' in window)
            return { touch: handlePress, mousedown: undefined }
        return { touch: undefined, mousedown: handlePress }
    }

    const handlePress = () => {
        onpress(row, col)
    }

    const getAlt = () => {
        return value ? images.unpressed.alt : images.pressed.alt
    }

    const getSrc = () => {
        return value ? images.unpressed.src : images.pressed.src
    }

    const events = interaction_event()

    return (
        <div>
            <img width="32" onMouseDown={events.mousedown} onTouchStart={events.touch} alt={getAlt()} src={getSrc()}></img>
        </div>
    );
}
 
export default Bubble;