// eslint-disable-next-line
import * as React from 'react'

export interface BubbleProps {
    value: boolean,
    row: number,
    col: number,
    onPress: (i: number, j: number) => void,
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

const maximumHonkingLevel = 4

class HonkMother {
  maxHonkers: number

  currentHonker: number

  honkers: Array<HTMLAudioElement>

  constructor(maximumHonking: number) {
    this.maxHonkers = maximumHonking
    this.honkers = []
    this.currentHonker = 0
    for (let i = 0; i < maximumHonking; i++) {
      this.honkers.push(new Audio(`${process.env.PUBLIC_URL}/honk.mp3`))
    }
  }

  honkMe(): void {
    this.honkers[this.currentHonker % this.maxHonkers].play()
    this.currentHonker += 1
  }
}

const HonkTimeFunZone: HonkMother = new HonkMother(maximumHonkingLevel)

const Bubble: React.FunctionComponent<BubbleProps> = ({ value, row, col, onPress }) => {
  const handlePress = () => {
    HonkTimeFunZone.honkMe()
    onPress(row, col)
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
