export const ComplicatedWireColorMask = {
    None: 0,
    Red: 1 << 0,
    Blue: 1 << 1,
} as const;

export type ComplicatedWireColorMask = typeof ComplicatedWireColorMask[keyof typeof ComplicatedWireColorMask]

export interface ComplicatedWire {
    colors: ComplicatedWireColorMask
    isLit: boolean
    hasStar: boolean
}

export interface ComplicatedWiresModule {
    wires: ComplicatedWire[]
}

export interface ComplicatedWiresSolution {
    description: string
    wireIndexes: number[]
}