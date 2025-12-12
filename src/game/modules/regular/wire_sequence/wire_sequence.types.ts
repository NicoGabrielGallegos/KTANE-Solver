export type SWireColor = "black" | "blue" | "red"

export interface SWire {
    color: SWireColor
    connectedTo: "A" | "B" | "C"
}

export interface WireSequenceStage {
    wires: SWire[]
}

export interface WireSequenceModule {
    stages: WireSequenceStage[]
}

export interface WireSequenceSolution {
    description: string
}