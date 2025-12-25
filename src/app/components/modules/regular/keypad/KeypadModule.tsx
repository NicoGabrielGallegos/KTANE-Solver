import { Grid } from "@mui/joy"
import type { Key } from "../../../../../game/modules/regular/keypad/keypad.types"
import { Module } from "../../Module"
import { KeyView } from "./KeyView"

interface KeypadModuleProps {
    keys: Key[]
    onKeyClick?: (event: React.MouseEvent<HTMLDivElement>, index: number) => void
}

export function KeypadModule({ keys, onKeyClick }: KeypadModuleProps) {
    return (
        <Module>
            <Grid
                container
                height={"100%"}
                alignContent={"flex-end"}
                justifyContent={"flex-star"}
                padding={4}
            >
                {
                    keys.map((key, i) => (
                        <KeyView
                            {...key}
                            key={i}
                            onClick={(e) => onKeyClick?.(e, i)}
                            sx={{ cursor: "pointer", margin: 1 }}
                        />
                    ))
                }
            </Grid>
        </Module>
    )
}