import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ROUTES } from './app/utils/routes'
import { WiresPage } from './app/pages/modules/regular/wires/WiresPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.WIRES} element={<WiresPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
