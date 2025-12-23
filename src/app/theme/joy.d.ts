import "@mui/joy/styles"

declare module "@mui/joy/styles" {
    interface Palette {
        wires: {
            red: {
                background: string;
                border: string;
            };
            blue: {
                background: string;
                border: string;
            };
            yellow: {
                background: string;
                border: string;
            };
            black: {
                background: string;
                border: string;
            };
            white: {
                background: string;
                border: string;
            };
            none: {
                background: string;
                border: string;
            };
        };
    }

    interface PaletteOptions {
        wires?: {
            red?: {
                background?: string;
                border?: string;
            };
            blue?: {
                background?: string;
                border?: string;
            };
            yellow?: {
                background?: string;
                border?: string;
            };
            black?: {
                background?: string;
                border?: string;
            };
            white?: {
                background?: string;
                border?: string;
            };
            none?: {
                background?: string;
                border?: string;
            };
        };
    }
}