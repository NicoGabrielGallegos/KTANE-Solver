export type ButtonColor = "black" | "blue" | "red" | "white" | "yellow"
export type ButtonLabel = "Abortar" | "Detonar" | "Mantener" | "Presionar"
export type ButtonAction = "tap" | "hold"

export type StripColor = "blue" | "red" | "white" | "yellow" | null

export interface Button {
    color: ButtonColor
    label: ButtonLabel
}

export interface Strip {
    color: StripColor
}

export interface TheButtonModule {
    button: Button
    strip: Strip
}

export interface ButtonSolution {
    description: string
    action: ButtonAction
}

export interface StripSolution {
    description: string
    numberInTimer: number
}