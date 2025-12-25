import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                ktane: {
                    module: {
                        background: "#e8e9ee",
                        border: "#bbbcd6"
                    },
                    outline: {
                        orange: {
                            500: "#DC5C32"
                        },
                        yellow: {
                            500: "#FBE504"
                        }
                    },
                    red: {
                        background: "#d32f2f",
                        border: "#850e18",
                        textContrast: "#E9E9E9"
                    },
                    blue: {
                        background: "#1976d2",
                        border: "#1c4f9b",
                        textContrast: "#E9E9E9"
                    },
                    yellow: {
                        background: "#fbc02d",
                        border: "#bb8116",
                        textContrast: "#282828"
                    },
                    black: {
                        background: "#212121",
                        border: "#0f0f0f",
                        textContrast: "#E9E9E9"
                    },
                    white: {
                        background: "#f5f5f5",
                        border: "#c7c7c7",
                        textContrast: "#282828"
                    },
                    none: {
                        background: "#6b728000",
                        border: "#6b7280"
                    },
                    keyColor: {
                        background: "#e8d9c3",
                        border: "#aa926f",
                        textContrast: "#0A0804"
                    },
                }
            }
        },
        light: {
            palette: {
                ktane: {
                    module: {
                        background: "#e8e9ee",
                        border: "#bbbcd6"
                    },
                    outline: {
                        orange: {
                            500: "#DC5C32"
                        },
                        yellow: {
                            500: "#FBE504"
                        }
                    },
                    red: {
                        background: "#d32f2f",
                        border: "#850e18",
                        textContrast: "#E9E9E9"
                    },
                    blue: {
                        background: "#1976d2",
                        border: "#1c4f9b",
                        textContrast: "#E9E9E9"
                    },
                    yellow: {
                        background: "#fbc02d",
                        border: "#bb8116",
                        textContrast: "#282828"
                    },
                    black: {
                        background: "#212121",
                        border: "#0f0f0f",
                        textContrast: "#E9E9E9"
                    },
                    white: {
                        background: "#f5f5f5",
                        border: "#c7c7c7",
                        textContrast: "#282828"
                    },
                    none: {
                        background: "#6b728000",
                        border: "#6b7280"
                    },
                    keyColor: {
                        background: "#e8d9c3",
                        border: "#aa926f",
                        textContrast: "#0A0804"
                    },
                }
            }
        }
    }
})

export default theme