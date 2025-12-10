import type { BombEdgework } from "../../../bomb/bomb.types.ts";
import { isOdd } from "../../../widgets/serial/serial.utils.ts";
import type { Wire, WireSolution } from "./wires.types.ts";
import { countBlack, countBlue, countRed, countWhite, countYellow, hasBlackAt, hasYellowAt, matchColors } from "./wires.utils.ts";

export function solveWires(wires: Wire[], edgework: BombEdgework): WireSolution {
    switch (wires.length) {
        case 3:
            return solveWires3(wires);
        case 4:
            return solveWires4(wires, edgework);
        case 5:
            return solveWires5(wires, edgework);
        case 6:
            return solveWires6(wires, edgework);
        default:
            throw new Error("Número inválido de cables.");
    }
}

const cut = (pos: string) => `Cortá el ${pos} cable`

export function solveWires3(wires: Wire[]): WireSolution {
    if (matchColors(wires, ["blue", "blue", "red"]) || countRed(wires) === 0) {
        return { description: cut("2do"), wireIndex: 1 }
    }
    return { description: cut("3er"), wireIndex: 2 }
}

export function solveWires4(wires: Wire[], edgework: BombEdgework): WireSolution {
    const { serial } = edgework
    if (countRed(wires) >= 2 && isOdd(serial) || hasYellowAt(wires, "last") && countRed(wires) === 0 || countBlue(wires) === 1) {
        return { description: cut("1er"), wireIndex: 0 }
    }
    if (countYellow(wires) >= 2) {
        return { description: cut("4to"), wireIndex: 3 }
    }
    return { description: cut("2do"), wireIndex: 1 }
}

export function solveWires5(wires: Wire[], edgework: BombEdgework): WireSolution {
    const { serial } = edgework
    if (hasBlackAt(wires, "last") && isOdd(serial)) {
        return { description: cut("4to"), wireIndex: 3 }
    }
    if (countRed(wires) === 1 && countYellow(wires) >= 2) {
        return { description: cut("1er"), wireIndex: 0 }
    }
    if (countBlack(wires) === 0) {
        return { description: cut("2do"), wireIndex: 1 }
    }
    return { description: cut("1er"), wireIndex: 0 }
}

export function solveWires6(wires: Wire[], edgework: BombEdgework): WireSolution {
    const { serial } = edgework
    if (countYellow(wires) === 0 && isOdd(serial)) {
        return { description: cut("3er"), wireIndex: 2 }
    }
    if (countYellow(wires) === 1 && countWhite(wires) >= 2) {
        return { description: cut("4to"), wireIndex: 3 }
    }
    if (countRed(wires) === 0) {
        return { description: cut("6to"), wireIndex: 5 }
    }
    return { description: cut("4to"), wireIndex: 3 }
}