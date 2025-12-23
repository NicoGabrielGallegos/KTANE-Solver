import type { SxProps } from "@mui/joy/styles/types"
import type { WireColor } from "../../../../../game/modules/regular/wires/wires.types"
import { Box, useTheme } from "@mui/joy"
import theme from "../../../../theme/theme"

interface WireViewProps {
    color?: WireColor
    onClick?: React.MouseEventHandler<HTMLDivElement>
    sx?: SxProps
}

export function WireView({ color, onClick, sx }: WireViewProps) {
    return (
        <Box
            onClick={(e) => onClick?.(e)}
            sx={{
                width: "100%",
                height: 32,
                borderRadius: 128,
                ...sx,
                border: `1px ${color ? "solid" : "dashed"}`,
                borderColor: `wires.${[color ? color : "none"]}.border`,
                backgroundColor: `wires.${[color ? color : "none"]}.background`,
            }}

        />
    )
}