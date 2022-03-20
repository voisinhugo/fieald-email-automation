import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { AuthWrapper } from 'modules/auth/AuthContext'
import { Home } from 'pages/Home'
import { theme } from 'theme'

import './index.css'

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
