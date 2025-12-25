import { Stack } from "@mui/joy"
import type { Wire } from "../../../../../game/modules/regular/wires/wires.types"
import { Module } from "../../Module"
import { WireView } from "./WireView"

interface WiresModuleProps {
    wires: (Wire | null)[]
    onWireClick?: (event: React.MouseEvent<HTMLDivElement>, index: number) => void
}

export function WiresModule({ wires, onWireClick }: WiresModuleProps) {
    return (
        <Module>
            <Stack direction="column" height="100%" justifyContent="space-evenly" paddingX={4}>
                {
                    wires.map((wire, i) => (
                        <WireView
                            {...wire}
                            key={i}
                            onClick={(e) => onWireClick?.(e, i)}
                            sx={{ cursor: "pointer" }}
                        />
                    ))
                }
            </Stack>
        </Module>
    )
}