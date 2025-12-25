import type { Wire, WireColor } from "./wires.types.ts";

// export const isColor = (wire: Wire, color: WireColor): boolean => wire.color === color
export const isRed = (wire: Wire): boolean => wire.color === "red"
export const isBlue = (wire: Wire): boolean => wire.color === "blue"
export const isBlack = (wire: Wire): boolean => wire.color === "black"
export const isYellow = (wire: Wire): boolean => wire.color === "yellow"
export const isWhite = (wire: Wire): boolean => wire.color === "white"

export const matchColors = (wires: Wire[], colors: WireColor[]): boolean => wires.every((wire, index) => wire.color === colors[index])

// export const countColor = (wires: Wire[], color: WireColor): number => wires.filter(wire => isColor(wire, color)).length
export const countRed = (wires: Wire[]): number => wires.filter(isRed).length
export const countBlue = (wires: Wire[]): number => wires.filter(isBlue).length
export const countBlack = (wires: Wire[]): number => wires.filter(isBlack).length
export const countYellow = (wires: Wire[]): number => wires.filter(isYellow).length
export const countWhite = (wires: Wire[]): number => wires.filter(isWhite).length

const hasColorAt = (wires: Wire[], pos: number | "last", color: WireColor): boolean => {
    if (pos === "last") {
        return wires[wires.length - 1].color === color
    }
    return wires[pos].color === color
}
export const hasRedAt = (wires: Wire[], pos: number | "last"): boolean => hasColorAt(wires, pos, "red")
export const hasBlueAt = (wires: Wire[], pos: number | "last"): boolean => hasColorAt(wires, pos, "blue")
export const hasBlackAt = (wires: Wire[], pos: number | "last"): boolean => hasColorAt(wires, pos, "black")
export const hasYellowAt = (wires: Wire[], pos: number | "last"): boolean => hasColorAt(wires, pos, "yellow")
export const hasWhiteAt = (wires: Wire[], pos: number | "last"): boolean => hasColorAt(wires, pos, "white")

export function createWire(color: WireColor): Readonly<Wire> {
    const wire = { color }
    return Object.freeze(wire)
}

//export function createWire(color: WireColor): Readonly<Wire> {
//    const wire = {
//        color,
//        isRed: color === "red",
//        isBlue: color === "blue",
//        isBlack: color === "black",
//        isYellow: color === "yellow",
//        isWhite: color === "white"
//    }
//
//    return Object.freeze(wire)
//}
//
// [WIP]
//export function createWires(colors: WireColor[]): Readonly<WiresModule> {
//    if (colors.length < 3 || colors.length > 6) {
//        throw new Error("Número inválido de cables.");
//    }
//    
//    const wires = colors.map(color => createWire(color))
//    const wiresModule = {
//        wires,
//        countRed: () => wires.filter(isRed).length
//    }
//}