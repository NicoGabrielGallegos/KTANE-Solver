import { useState } from "react"
import type { Wire, WireColor } from "../../../../../game/modules/regular/wires/wires.types"
import { createWire } from "../../../../../game/modules/regular/wires/wires.utils"
import { WiresModule } from "../../../../components/modules/regular/wires/WiresModule"
import { Box, Menu, MenuItem } from "@mui/joy"

const COLORS: (WireColor | null)[] = [
    null,
    "white",
    "red",
    "blue",
    "yellow",
    "black"
]

export function WiresPage() {
    const [wires, setWires] = useState<(Wire | null)[]>(Array.from({ length: 6 }, () => null))
    const [anchorWire, setAnchorWire] = useState<HTMLElement | null>(null)
    const [activeWireIndex, setActiveWireIndex] = useState<number | null>(null)

    const open = Boolean(anchorWire)

    const handleWireClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        setAnchorWire(event.currentTarget)
        setActiveWireIndex(index)
        event.stopPropagation()
    }

    const handleSelectColor = (color: WireColor | null) => {
        if (activeWireIndex === null) return

        setWires(prev =>
            prev.map((wire, index) =>
                index === activeWireIndex ? (color ? createWire(color) : null) : wire
            )
        )

        setAnchorWire(null)
        setActiveWireIndex(null)
    }

    return (
        <>
            <WiresModule
                wires={wires}
                onWireClick={handleWireClick}
            />
            <Menu
                open={open}
                anchorEl={anchorWire}
                onClose={() => setAnchorWire(null)}
                placement="right"
            >
                {COLORS.map(color => (
                    <MenuItem
                        key={color}
                        onClick={() => handleSelectColor(color)}
                    >
                        <Box
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                                border: `1px black ${color ? "solid" : "dashed"}`,
                                borderColor: `ktane.${[color ? color : "none"]}.border`,
                                backgroundColor: `ktane.${[color ? color : "none"]}.background`,
                            }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}