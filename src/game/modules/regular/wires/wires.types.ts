export type WireColor = "red" | "blue" | "black" | "yellow" | "white"

export interface Wire {
    color: WireColor
}

export interface WiresModule {
    wires: Wire[]
}

export interface WireSolution {
    description: string
    wireIndex: number
}