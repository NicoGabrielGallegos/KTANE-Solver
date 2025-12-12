export type WireColor = "red" | "blue" | "black" | "yellow" | "white"

export interface Wire {
    color: WireColor
    //isColor: () => boolean
    //isRed: boolean
    //isBlue: boolean
    //isBlack: boolean
    //isYellow: boolean
    //isWhite: boolean
}

export interface WiresModule {
    wires: Wire[]
    //countRed: () => number
    //countBlue: () => number
    //countBlack: () => number
    //countYellow: () => number
    //countWhite: () => number
    //hasRedAt: () => boolean
    //hasBlueAt: () => boolean
    //hasBlackAt: () => boolean
    //hasYellowAt: () => boolean
    //hasWhiteAt: () => boolean
}

export interface WiresSolution {
    description: string
    wireIndex: number
}