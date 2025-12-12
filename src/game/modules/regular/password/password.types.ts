type Letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"

export interface PasswordSlot {
    letters: Letter[]
}

export interface PasswordModule {
    slots: PasswordSlot[]
}

export interface PasswordSolution {
    description: string
    password: string
}