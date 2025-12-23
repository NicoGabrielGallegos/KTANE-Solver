import { CssVarsProvider } from "@mui/joy/styles";
import theme from "../theme/theme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <CssVarsProvider theme={theme} defaultMode="light">
            {children}
        </CssVarsProvider>
    )
}