export type WireColor = "red" | "blue" | "black" | "yellow" | "white"

export interface Wire {
    color: WireColor
}

export interface WiresModule {
    wires: Wire[]
}

export interface WiresSolution {
    description: string
    wireIndex: number
}