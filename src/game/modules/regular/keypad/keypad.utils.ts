import type { Key, KeyPosition, KeySymbol } from "./keypad.types"

// const SYMBOLS = [" ", "©", "★", "☆", "ټ", "Җ", "Ω", "Ѭ", "ὦ", "ϗ", "б", "Ϟ", "Ѧ", "æ", "Ԇ", "Ӭ", "Ҋ", "Ѯ", "¿", "¶", "Ͼ", "Ͽ", "Ψ", "Ҩ", "҂", "Ϙ", "ƛ", "ѣ"]
// const [
//     EMPTY, COPYRIGHT, FILLED_STAR, HOLLOW_STAR, SMILEY_FACE, DOUBLE_K, OMEGA, SQUID_KNIFE, PUMPKIN, HOOK_N, SIX, SQUIGGLY_N, AT, AE, MELTED_THREE,
//     EURO, N_WITH_HAT, DRAGON, QUESTION_MARK, PARAGRAPH, RIGHT_C, LEFT_C, PITCHFORK, CURSIVE, TRACKS, BALLOON, UPSIDE_DOWN_Y, BT
// ] = SYMBOLS
// const SYMBOL_COLUMNS = [
//     [BALLOON, AT, UPSIDE_DOWN_Y, SQUIGGLY_N, SQUID_KNIFE, HOOK_N, LEFT_C],
//     [EURO, BALLOON, LEFT_C, CURSIVE, HOLLOW_STAR, HOOK_N, QUESTION_MARK],
//     [COPYRIGHT, PUMPKIN, CURSIVE, DOUBLE_K, MELTED_THREE, UPSIDE_DOWN_Y, HOLLOW_STAR],
//     [SIX, PARAGRAPH, BT, SQUID_KNIFE, DOUBLE_K, QUESTION_MARK, SMILEY_FACE],
//     [PITCHFORK, SMILEY_FACE, BT, RIGHT_C, PARAGRAPH, DRAGON, FILLED_STAR],
//     [SIX, EURO, TRACKS, AE, PITCHFORK, N_WITH_HAT, OMEGA],
// ]

export function createKey(symbol: KeySymbol, position: KeyPosition): Readonly<Key> {
    const key = { symbol, position }
    return Object.freeze(key)
}


