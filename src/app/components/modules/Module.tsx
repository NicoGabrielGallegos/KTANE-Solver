import Sheet from "@mui/joy/Sheet"
import type { SxProps } from "@mui/joy/styles/types"

interface ModuleProps {
    children: any
    variant?: ("plain" | "outlined" | "soft" | "solid")
    sx?: SxProps
}

export function Module({ children, variant = "outlined", sx }: ModuleProps) {
    return (
        <Sheet variant={variant} sx={{ width: 512, height: 512, borderRadius: 16, ...sx }}>
            {children}
        </Sheet>
    )
}