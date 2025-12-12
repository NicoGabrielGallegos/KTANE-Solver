export type KeySymbol = " " | "©" | "★" | "☆" | "ټ" | "Җ" | "Ω" | "Ѭ" | "ὦ" | "ϗ" | "б" | "Ϟ" | "Ѧ" | "æ" | "Ԇ" | "Ӭ" | "Ҋ" | "Ѯ" | "¿" | "¶" | "Ͼ" | "Ͽ" | "Ψ" | "Ҩ" | "҂" | "Ϙ" | "ƛ" | "ѣ"

type KeyRow = "top" | "bottom"
type KeyColumn = "left" | "right"
export type KeyPosition = `${KeyRow}-${KeyColumn}`

export interface Key {
    symbol: KeySymbol
    position: KeyPosition
}

export interface KeypadModule {
    keys: Key[]
}

export interface KeypadSolution {
    description: string
    positionOrder: KeyPosition[]
    symbolOrder: KeySymbol[]
}