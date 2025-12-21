import type { BombEdgework } from "../../../bomb/bomb.types";
import { countTotalBatteries } from "../../../widgets/batteries/batteries.utils";
import { hasIndicator } from "../../../widgets/indicators/indicators.utils";
import type { Button, ButtonSolution, Strip, StripSolution } from "./the_button.types";
import { isBlue, isRed, isWhite, isYellow, saysAbort, saysDetonate, saysHold } from "./the_button.utils";

export function solveButton(button: Button, edgework: BombEdgework): ButtonSolution {
    const { batteries, indicators } = edgework

    if (isRed(button) && saysHold(button) || countTotalBatteries(batteries) >= 2 && saysDetonate(button)) {
        return { description: "Presionar y soltar", action: "tap" }
    }
    if (isBlue(button) && saysAbort(button) || hasIndicator(indicators, {label: "CAR", isLit: true}) && isWhite(button)) {
        return { description: "Mantener y mirar franja", action: "hold" }
    }
    if (countTotalBatteries(batteries) >= 3 && hasIndicator(indicators, {label: "FRK", isLit: true})) {
        return { description: "Presionar y soltar", action: "tap" }
    }
    return { description: "Mantener y mirar franja", action: "hold" }
}

export function solveStrip(strip: Strip): StripSolution {
    if (isBlue(strip)) {
        return {description: "Soltar cuando haya un 4 en el timer", numberInTimer: 4}
    }
    if (isYellow(strip)) {
        return {description: "Soltar cuando haya un 5 en el timer", numberInTimer: 5}
    }
    return {description: "Soltar cuando haya un 1 en el timer", numberInTimer: 1}
}