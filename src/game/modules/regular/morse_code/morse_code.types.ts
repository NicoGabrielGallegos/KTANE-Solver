export type Frequency = `3.5${"05" | "15" | "22" | "32" | "35" | "42" | "45" | "52" | "55" | "65" | "72" | "75" | "82" | "92" | "95"}` | "3.600"

export type MorseWord = "freno" | "hongos" | "lentes" | "biela" | "resta" |"trato" | "volar" | "vuelta" | "llaves" | "tabla" | "tronco" | "bomba" | "santos" | "senso" | "ratas" | "trenes"

export type MorseSymbol = "." | "-" | " " | "/"

export interface MorseModule {
    sequence: MorseSymbol[]
}

export interface MorseSolution {
    description: string
    word: MorseWord
    frequency: Frequency
}