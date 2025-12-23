import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                wires: {
                    red: {
                        background: "#d32f2f",
                        border: "#850e18"
                    },
                    blue: {
                        background: "#1976d2",
                        border: "#1c4f9b"
                    },
                    yellow: {
                        background: "#fbc02d",
                        border: "#bb8116"
                    },
                    black: {
                        background: "#212121",
                        border: "#0f0f0f"
                    },
                    white: {
                        background: "#f5f5f5",
                        border: "#c7c7c7"
                    },
                    none: {
                        background: "#6b728000",
                        border: "#6b7280"
                    },
                }
            }
        },
        light: {
            palette: {
                wires: {
                    red: {
                        background: "#d32f2f",
                        border: "#850e18"
                    },
                    blue: {
                        background: "#1976d2",
                        border: "#1c4f9b"
                    },
                    yellow: {
                        background: "#fbc02d",
                        border: "#bb8116"
                    },
                    black: {
                        background: "#212121",
                        border: "#0f0f0f"
                    },
                    white: {
                        background: "#f5f5f5",
                        border: "#c7c7c7"
                    },
                    none: {
                        background: "#6b728000",
                        border: "#6b7280"
                    },
                }
            }
        }
    }
})

export default theme