import type { BombEdgework } from "../../../bomb/bomb.types.ts";
import { countTotalBatteries } from "../../../widgets/batteries/batteries.utils.ts";
import { hasParallel } from "../../../widgets/ports/ports.utils.ts";
import { isEven } from "../../../widgets/serial/serial.utils.ts";
import type { ComplicatedWire, ComplicatedWiresSolution } from "./complicated_wires.types.ts";
import { hasBlue, hasRed } from "./complicated_wires.utils.ts";

//export function solveComplicatedWire(wire: ComplicatedWire): boolean {
//    const isSerialEven = serial.lastDigit % 2 === 0
//}

export function solveComplicatedWires(wires: ComplicatedWire[], edgework: BombEdgework): ComplicatedWiresSolution {
    const { serial, batteries, ports } = edgework

    const isSerialNumberEven = isEven(serial)
    const hasTwoOrMoreBatteries = countTotalBatteries(batteries) >= 2
    const hasParallelPort = hasParallel(ports)

    const decisionTable = {
        none: { white: true, red: isSerialNumberEven, blue: isSerialNumberEven, both: isSerialNumberEven },
        star: { white: true, red: true, blue: false, both: hasParallelPort },
        led: { white: false, red: hasTwoOrMoreBatteries, blue: hasParallelPort, both: isSerialNumberEven},
        both: { white: hasTwoOrMoreBatteries, red: hasTwoOrMoreBatteries, blue: hasParallelPort, both: false},
    }

    const wireIndexes: number[] = []
    wires.forEach((wire, index) => {
        const decisionRow =
            wire.isLit
                ? wire.hasStar
                    ? decisionTable.both
                    : decisionTable.led
                : wire.hasStar
                    ? decisionTable.star
                    : decisionTable.none
        const decision =
            hasBlue(wire)
                ? hasRed(wire)
                    ? decisionRow.both
                    : decisionRow.blue
                : hasRed(wire)
                    ? decisionRow.red
                    : decisionRow.white
        if (decision) wireIndexes.push(index)
    })
    return { description: "", wireIndexes }
}