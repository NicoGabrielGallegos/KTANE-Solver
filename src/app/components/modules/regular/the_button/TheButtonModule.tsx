import { Stack } from "@mui/joy"
import { Module } from "../../Module"
import type { Button, Strip } from "../../../../../game/modules/regular/the_button/the_button.types"
import { ButtonView } from "./ButtonView"
import { StripView } from "./StripView"

interface TheButtonModuleProps {
    button: Button
    strip: Strip
    onButtonColorClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    onButtonLabelClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    onStripClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export function TheButtonModule({ button, strip, onButtonColorClick, onButtonLabelClick, onStripClick }: TheButtonModuleProps) {
    return (
        <Module>
            <Stack direction="row" height="100%" justifyContent="space-evenly" alignItems="center">
                <ButtonView
                    {...button}
                    onColorClick={onButtonColorClick}
                    onLabelClick={onButtonLabelClick}
                    sx={{ cursor: "pointer" }}
                />

                <StripView
                    {...strip}
                    onClick={onStripClick}
                    sx={{ cursor: "pointer" }}
                />
            </Stack>
        </Module>
    )
}