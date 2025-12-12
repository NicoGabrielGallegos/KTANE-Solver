export type ButtonColor = "black" | "blue" | "red" | "white" | "yellow"
export type ButtonLabel = "Abort" | "Detonate" | "Hold" | "Press"

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
    action: "tap" | "hold"
}

export interface StripSolution {
    description: string
    numberInTimer: number
}