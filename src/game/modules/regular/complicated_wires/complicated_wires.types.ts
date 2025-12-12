export type ComplicatedWireColor = "white" | "blue" | "red" | "blue-red"

export interface ComplicatedWire {
    colors: ComplicatedWireColor[]
    hasRed: boolean
    hasBlue: boolean
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