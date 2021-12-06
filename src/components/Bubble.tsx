import * as React from 'react'

export interface BubbleProps {
    value: boolean,
    row: number,
    col: number,
    onpress: (i: number, j: number) => void,
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

const images: Images = {
  unpressed: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Button_Icon_Blue.svg',
    alt: 'blue button',
  },
  pressed: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg',
    alt: 'white button',
  },
}

const Bubble: React.FunctionComponent<BubbleProps> = ({ value, row, col, onpress }) => {
  const handlePress = () => {
    onpress(row, col)
  }

  const interactionEvent = (): InteractionEvents => {
    if ('ontouchstart' in window) { return { touch: handlePress, mousedown: undefined } }
    return { touch: undefined, mousedown: handlePress }
  }

  const getAlt = () => (value ? images.unpressed.alt : images.pressed.alt)

  const getSrc = () => (value ? images.unpressed.src : images.pressed.src)

  const events = interactionEvent()

  return (
    <div role="none" onMouseDown={events.mousedown} onTouchStart={events.touch}>
      <img width="32" alt={getAlt()} src={getSrc()} />
    </div>
  )
}

export default Bubble
