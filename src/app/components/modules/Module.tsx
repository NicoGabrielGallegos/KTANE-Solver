import Sheet from "@mui/joy/Sheet"
import type { SxProps } from "@mui/joy/styles/types"

interface ModuleProps {
    children: any
    variant?: ("plain" | "outlined" | "soft" | "solid")
    sx?: SxProps
}

export function Module({ children, variant = "outlined", sx }: ModuleProps) {
    return (
        <Sheet
            variant={variant}
            sx={{
                width: 400,
                height: 400,
                borderRadius: 8,
                border: "1px solid",
                borderColor: "ktane.module.border",
                backgroundColor: "ktane.module.background",
                ...sx,
            }}
        >
            {children}
        </Sheet>
    )
}