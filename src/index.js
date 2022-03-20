import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages/Home'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { AuthWrapper } from './modules/auth/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthWrapper>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </AuthWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
