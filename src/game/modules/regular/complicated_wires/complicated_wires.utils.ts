import { ComplicatedWireColorMask, type ComplicatedWire } from "./complicated_wires.types.ts"

export const hasColor = (wire: ComplicatedWire, color: ComplicatedWireColorMask): boolean => (wire.colors & color) !== 0
export const hasRed = (wire: ComplicatedWire): boolean => hasColor(wire, ComplicatedWireColorMask.Red)
export const hasBlue = (wire: ComplicatedWire): boolean => hasColor(wire, ComplicatedWireColorMask.Blue)

