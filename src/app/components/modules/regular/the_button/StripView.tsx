import type { SxProps } from "@mui/joy/styles/types"
import { Box } from "@mui/joy"
import type { StripColor } from "../../../../../game/modules/regular/the_button/the_button.types"

interface StripViewProps {
    color?: StripColor
    onClick?: React.MouseEventHandler<HTMLDivElement>
    sx?: SxProps
}

export function StripView({ color, onClick, sx }: StripViewProps) {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: 40,
                height: 200,
                ...sx,
                border: `1px ${color ? "solid" : "dashed"}`,
                borderColor: `ktane.${[color ? color : "none"]}.border`,
                backgroundColor: `ktane.${[color ? color : "none"]}.background`,
                ":hover": {
                    boxShadow: "0 0 0 2px var(--joy-palette-ktane-outline-orange-500)"
                }
            }}
        />
    )
}