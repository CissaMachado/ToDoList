import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalCss } from './global'
import './global.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalCss />
  </React.StrictMode>,
)
