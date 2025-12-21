import type { Key, KeypadSolution, KeySymbol } from "./keypad.types.ts";

export function solveKeypad(keys: Key[]): KeypadSolution {
    const a: KeySymbol[][] = [
        ["Ϙ", "Ѧ", "ƛ", "Ϟ", "Ѭ", "ϗ", "Ͽ"],
        ["Ӭ", "Ϙ", "Ͽ", "Ҩ", "☆", "ϗ", "¿"],
        ["©", "ὦ", "Ҩ", "Җ", "Ԇ", "ƛ", "☆"],
        ["б", "¶", "ѣ", "Ѭ", "Җ", "¿", "ټ"],
        ["Ψ", "ټ", "ѣ", "Ͼ", "¶", "Ѯ", "★"],
        ["б", "Ӭ", "҂", "æ", "Ψ", "Ҋ", "Ω"]
    ]
    
    return { description: "", keys: [] }
}