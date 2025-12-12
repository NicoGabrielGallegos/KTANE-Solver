import type { Button, Strip } from "./the_button.types";

export const isRed = (element: Button | Strip): boolean => element.color === "red"
export const isBlue = (element: Button | Strip): boolean => element.color === "blue"
export const isBlack = (element: Button): boolean => element.color === "black"
export const isYellow = (element: Button | Strip): boolean => element.color === "yellow"
export const isWhite = (element: Button | Strip): boolean => element.color === "white"

export const saysAbort = (button: Button): boolean => button.label === "Abort"
export const saysDetonate = (button: Button): boolean => button.label === "Detonate"
export const saysHold = (button: Button): boolean => button.label === "Hold"
export const saysPress = (button: Button): boolean => button.label === "Press"