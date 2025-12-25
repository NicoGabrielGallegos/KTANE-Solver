import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ROUTES } from './app/utils/routes'
import { AppThemeProvider } from './app/providers/AppThemeProvider'
import { WiresPage } from './app/pages/modules/regular/wires/WiresPage'
import { TheButtonPage } from './app/pages/modules/regular/the_button/TheButtonPage'
import { KeypadPage } from './app/pages/modules/regular/keypad/KeypadPage'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.WIRES} element={<WiresPage />} />
          <Route path={ROUTES.THE_BUTTON} element={<TheButtonPage />} />
          <Route path={ROUTES.KEYPAD} element={<KeypadPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
