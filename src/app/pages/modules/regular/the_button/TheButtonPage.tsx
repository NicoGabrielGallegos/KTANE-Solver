import { useState } from "react"
import type { Button, ButtonColor, ButtonLabel, Strip, StripColor } from "../../../../../game/modules/regular/the_button/the_button.types"
import { createButton, createStrip } from "../../../../../game/modules/regular/the_button/the_button.utils"
import { TheButtonModule } from "../../../../components/modules/regular/the_button/TheButtonModule"
import { Box, Menu, MenuItem, Typography } from "@mui/joy"

const BUTTON_COLORS: ButtonColor[] = [
    "white",
    "red",
    "blue",
    "yellow",
    "black"
]

const BUTTON_LABELS: ButtonLabel[] = [
    "Abortar",
    "Detonar",
    "Mantener",
    "Presionar"
]

const STRIP_COLORS: StripColor[] = [
    "white",
    "red",
    "blue",
    "yellow"
]

export function TheButtonPage() {
    const [button, setButton] = useState<Button>(createButton("white", "Presionar"))
    const [strip, setStrip] = useState<Strip>(createStrip(null))
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [activeElIndex, setActiveElIndex] = useState<number | null>(null)
    //const [enableStrip, setEnableStrip] = useState<boolean>(false)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        setAnchorEl(event.currentTarget)
        setActiveElIndex(index)
        event.stopPropagation()
    }

    const closeMenu = () => {
        setAnchorEl(null)
        setActiveElIndex(null)
    }

    const handleSelectButtonColor = (color: ButtonColor) => {
        if (activeElIndex === null) return
        setButton(prev => createButton(color, prev.label))
        closeMenu()
    }

    const handleSelectButtonLabel = (label: ButtonLabel) => {
        if (activeElIndex === null) return
        setButton(prev => createButton(prev.color, label))
        closeMenu()
    }

    const handleSelectStripColor = (color: StripColor) => {
        if (activeElIndex === null) return
        setStrip(createStrip(color))
        closeMenu()
    }

    return (
        <>
            <TheButtonModule
                button={button}
                strip={strip}
                onButtonColorClick={(e) => handleClick(e, 0)}
                onButtonLabelClick={(e) => handleClick(e, 1)}
                onStripClick={(e) => handleClick(e, 2)}
            />
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                placement="right"
            >
                {activeElIndex === 0 && BUTTON_COLORS.map(color => (
                    <MenuItem
                        key={color}
                        onClick={() => handleSelectButtonColor(color)}
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
                {activeElIndex === 1 && BUTTON_LABELS.map(label => (
                    <MenuItem
                        key={label}
                        onClick={() => handleSelectButtonLabel(label)}
                    >
                        <Typography
                            fontFamily={"Dosis"}
                            fontWeight={500}
                            lineHeight={1}
                        >
                            {label}
                        </Typography>
                    </MenuItem>
                ))}
                {activeElIndex === 2 && STRIP_COLORS.map(color => (
                    <MenuItem
                        key={color}
                        onClick={() => handleSelectStripColor(color)}
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