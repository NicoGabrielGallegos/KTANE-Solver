import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ROUTES } from './app/utils/routes'
import { WiresPage } from './app/pages/modules/regular/wires/WiresPage'
import { useTheme } from '@mui/joy'
import { AppThemeProvider } from './app/providers/AppThemeProvider'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.WIRES} element={<WiresPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
