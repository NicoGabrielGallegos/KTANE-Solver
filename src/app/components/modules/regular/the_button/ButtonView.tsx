import type { SxProps } from "@mui/joy/styles/types"
import { Box, Typography } from "@mui/joy"
import type { ButtonColor, ButtonLabel } from "../../../../../game/modules/regular/the_button/the_button.types"
import type React from "react"

interface ButtonViewProps {
    color?: ButtonColor
    label?: ButtonLabel
    onColorClick?: React.MouseEventHandler<HTMLDivElement>
    onLabelClick?: React.MouseEventHandler<HTMLDivElement>
    sx?: SxProps
}

export function ButtonView({ color, label, onColorClick, onLabelClick, sx }: ButtonViewProps) {
    return (
        <Box
            onClick={onColorClick}
            sx={{
                width: 250,
                height: 250,
                borderRadius: 175,
                ...sx,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid",
                borderColor: `ktane.${color}.border`,
                backgroundColor: `ktane.${color}.background`,
                ":hover:not(:has(:hover))": {
                    boxShadow: "0 0 0 2px var(--joy-palette-ktane-outline-orange-500)"
                }
            }}
        >
            <Typography
                onClick={onLabelClick}
                fontSize={48}
                fontFamily={"Dosis"}
                lineHeight={1}
                sx={{
                    color: `ktane.${color}.textContrast`,
                    ":hover": {
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "var(--joy-palette-ktane-outline-orange-500)",
                    }
                }}
            >
                {label?.toLocaleUpperCase()}
            </Typography>
        </Box>
    )
}