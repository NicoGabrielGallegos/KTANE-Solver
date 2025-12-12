export type ButtonColor = "blue" | "green" | "red" | "yellow"

export interface SimonSaysModule {
    sequence: ButtonColor[]
}

export interface SimonSaysSolution {
    description: string
    sequence: ButtonColor[]
}