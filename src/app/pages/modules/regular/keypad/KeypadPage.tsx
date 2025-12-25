import { useState } from "react"
import type { Key, KeySymbol } from "../../../../../game/modules/regular/keypad/keypad.types"
import { createKey } from "../../../../../game/modules/regular/keypad/keypad.utils"
import { KeypadModule } from "../../../../components/modules/regular/keypad/KeypadModule"
import { Box, Grid, Menu, MenuItem, Typography } from "@mui/joy"

const SYMBOLS: KeySymbol[] = ["©", "★", "☆", "ټ", "Җ", "Ω", "Ѭ", "ὦ", "ϗ", "б", "Ϟ", "Ѧ", "æ", "Ԇ", "Ӭ", "Ҋ", "Ѯ", "¿", "¶", "Ͼ", "Ͽ", "Ψ", "Ҩ", "҂", "Ϙ", "ƛ", "ѣ"]

const SYMBOL_COLUMNS: KeySymbol[][] = [
    ["Ϙ", "Ѧ", "ƛ", "Ϟ", "Ѭ", "ϗ", "Ͽ"],
    ["Ӭ", "Ϙ", "Ͽ", "Ҩ", "☆", "ϗ", "¿"],
    ["©", "ὦ", "Ҩ", "Җ", "Ԇ", "ƛ", "☆"],
    ["б", "¶", "ѣ", "Ѭ", "Җ", "¿", "ټ"],
    ["Ψ", "ټ", "ѣ", "Ͼ", "¶", "Ѯ", "★"],
    ["б", "Ӭ", "҂", "æ", "Ψ", "Ҋ", "Ω"]
]

export function KeypadPage() {
    const [keys, setKeys] = useState<Key[]>([
        createKey(" ", "top-left"),
        createKey(" ", "top-right"),
        createKey(" ", "bottom-left"),
        createKey(" ", "bottom-right"),
    ])
    const [anchorKey, setAnchorKey] = useState<HTMLElement | null>(null)
    const [activeKeyIndex, setActiveKeyIndex] = useState<number | null>(null)

    const open = Boolean(anchorKey)

    const handleKeyClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        setAnchorKey(event.currentTarget)
        setActiveKeyIndex(index)

        event.stopPropagation()
    }

    const handleSelectSymbol = (symbol: KeySymbol) => {
        if (activeKeyIndex === null) return

        setKeys(prev =>
            prev.map((key, index) =>
                index === activeKeyIndex ? (createKey(symbol, key.position)) : key
            )
        )

        setAnchorKey(null)
        setActiveKeyIndex(null)
    }

    return (
        <>
            <KeypadModule
                keys={keys}
                onKeyClick={handleKeyClick}
            />
            <Menu
                open={open}
                anchorEl={anchorKey}
                onClose={() => setAnchorKey(null)}
                placement="right-start"
                sx={{ padding: 0 }}
            >
                <Grid container>
                    {SYMBOL_COLUMNS.map((column, i) => (
                        <Grid key={i}>
                            {column.map(symbol => (
                                <MenuItem
                                    key={symbol}
                                    onClick={() => handleSelectSymbol(symbol)}
                                    sx={{ justifyContent: "center", padding: 0, width: 50, height: 50 }}
                                >
                                    <Typography
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        width={40}
                                        height={40}
                                        textAlign={"center"}
                                        lineHeight={1}
                                        fontSize={30}
                                        fontFamily={"sans-serif"}
                                    >
                                        {symbol}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Menu>
        </>
    )
}