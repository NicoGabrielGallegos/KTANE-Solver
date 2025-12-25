import "@mui/joy/styles"

declare module "@mui/joy/styles" {
    interface Palette {
        ktane: {
            module: {
                background: string;
                border: string;
            };
            outline: {
                orange: {
                    500: string;
                },
                yellow: {
                    500: string;
                }
            };
            red: {
                background: string;
                border: string;
                textContrast: string;
            };
            blue: {
                background: string;
                border: string;
                textContrast: string;
            };
            yellow: {
                background: string;
                border: string;
                textContrast: string;
            };
            black: {
                background: string;
                border: string;
                textContrast: string;
            };
            white: {
                background: string;
                border: string;
                textContrast: string;
            };
            none: {
                background: string;
                border: string;
            };
            keyColor: {
                background?: string;
                border?: string;
                textContrast: string;
            };
        };
    }

    interface PaletteOptions {
        ktane?: {
            module?: {
                background?: string;
                border?: string;
            };
            outline?: {
                orange?: {
                    500?: string;
                },
                yellow?: {
                    500?: string;
                }
            };
            red?: {
                background?: string;
                border?: string;
                textContrast?: string;
            };
            blue?: {
                background?: string;
                border?: string;
                textContrast?: string;
            };
            yellow?: {
                background?: string;
                border?: string;
                textContrast?: string;
            };
            black?: {
                background?: string;
                border?: string;
                textContrast?: string;
            };
            white?: {
                background?: string;
                border?: string;
                textContrast?: string;
            };
            none?: {
                background?: string;
                border?: string;
            };
            keyColor: {
                background?: string;
                border?: string;
                textContrast: string;
            };
        };
    }
}