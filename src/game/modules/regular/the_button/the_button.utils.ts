import type { Button, ButtonColor, ButtonLabel, Strip, StripColor } from "./the_button.types";

export const isRed = (element: Button | Strip): boolean => element.color === "red"
export const isBlue = (element: Button | Strip): boolean => element.color === "blue"
export const isBlack = (element: Button): boolean => element.color === "black"
export const isYellow = (element: Button | Strip): boolean => element.color === "yellow"
export const isWhite = (element: Button | Strip): boolean => element.color === "white"

export const saysAbortar = (button: Button): boolean => button.label === "Abortar"
export const saysDetonar = (button: Button): boolean => button.label === "Detonar"
export const saysMantener = (button: Button): boolean => button.label === "Mantener"
export const saysPresionar = (button: Button): boolean => button.label === "Presionar"

export function createButton(color: ButtonColor, label: ButtonLabel): Readonly<Button> {
    const button = { color, label }
    return Object.freeze(button)
}

export function createStrip(color: StripColor): Readonly<Strip> {
    const strip = { color }
    return Object.freeze(strip)
}