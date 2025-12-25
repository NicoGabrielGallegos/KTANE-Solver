import type { SxProps } from "@mui/joy/styles/types"
import { Box, Typography } from "@mui/joy"
import type { KeySymbol } from "../../../../../game/modules/regular/keypad/keypad.types"

interface KeyViewProps {
    symbol?: KeySymbol
    onClick?: React.MouseEventHandler<HTMLDivElement>
    sx?: SxProps
}

export function KeyView({ symbol, onClick, sx }: KeyViewProps) {
    return (
        <Box
            onClick={(e) => onClick?.(e)}
            sx={{
                width: 120,
                height: 120,
                borderRadius: 10,
                ...sx,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
                borderColor: `ktane.keyColor.border`,
                backgroundColor: "ktane.keyColor.background",
                ":hover": {
                    boxShadow: "0 0 0 2px var(--joy-palette-ktane-outline-orange-500)"
                }
            }}
        >
            <Typography
                fontSize={72}
                fontFamily={"sans-serif"}
                lineHeight={1}
                sx={{
                    color: `ktane.keyColor.textContrast`,
                }}
            >
                {symbol}
            </Typography>
        </Box>
    )
}