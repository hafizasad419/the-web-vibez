import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import BaseRoutes from './Routes'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BaseRoutes />
    </BrowserRouter>
  )
}

export default App